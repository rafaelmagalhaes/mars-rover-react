import React, { useState, useEffect } from "react";
import { MarsRover, INSTRUCTION } from "./MarsRovers";
import { useForm } from "react-hook-form";
import "./App.css";

const App = ({ onSubmit, coordinates, roverError }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Starting location (Eg: 12N)</label>
        <input
          name="location"
          defaultValue="12N"
          ref={register({
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9]{2}[E-N-S-W]$/,
              message:
                "Location doesn't match format, make sure its two digits followed by one of these characters NSEW (11E)",
            },
          })}
        />
        {errors.location && errors.location.type === "pattern" && (
          <p className="error">{errors.location.message} </p>
        )}
        {errors.location && errors.location.type === "required" && (
          <p className="error">Location is required</p>
        )}

        <label>Instructions(Eg, Move(M), Left(L), Right(R)</label>
        <input
          name="instructions"
          defaultValue="LMLMLMLMM"
          ref={register({
            required: true,
            pattern: {
              value: /^[LMR]+$/,
              message: "Only letters M,L,R are allowed",
            },
          })}
        />
        {errors.instructions && errors.instructions.type === "required" && (
          <p className="error">This field is required</p>
        )}
        {errors.instructions && errors.instructions.type === "pattern" && (
          <p className="error">{errors.instructions.message} </p>
        )}
        <input type="submit" />
      </form>

      {roverError ? <p className="error">{roverError}</p> : ""}
      {coordinates ? (
        <p className="success">Rovers Location: {coordinates}</p>
      ) : (
        ""
      )}
    </div>
  );
};

const ConnectApp = () => {
  const [roverError, setRoverError] = useState("");
  const [coordinates, setCoordinates] = useState("");

  const onSubmit = (data) => {
    let locationValue = data.location.split("");

    getMarsRoverCoordinate({
      loc: locationValue.splice(0, 2),
      inst: data.instructions,
      direc: locationValue[0],
    });
  };
  const getMarsRoverCoordinate = ({ loc, direc, grd, inst }) => {
    const location = loc ? loc : [0, 0];
    const direction = direc ? direc : "N";
    const grid = grd ? grd : [5, 5];
    const steps = inst ? inst.split("") : [];
    const rover = new MarsRover(location, direction);
    steps.forEach((step) => {
      if (step === INSTRUCTION.LEFT || step === INSTRUCTION.RIGHT) {
        rover.setDirection(step);
      } else if (step === INSTRUCTION.MOVE) {
        rover.move(grid);
      }
    });
    if (rover.error) {
      setRoverError(rover.error);
      setCoordinates("");
    }
    if (rover.toString()) {
      setCoordinates(rover.toString());
      setRoverError("");
    }
  };
  return (
    <App
      onSubmit={onSubmit}
      coordinates={coordinates}
      roverError={roverError}
    />
  );
};

export default ConnectApp;
