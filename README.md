This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## MarsRover
```
getMarsRoverCoordinate takes in the 
following paramenters

  loc: [0,0] //default location value
  direc: "N" // default direction value;
  grd: [5, 5] //default grid size;
  inst: [] //default instructions accepts L(Left), R(Right), M(Move);
  
  Initial set up 
  getMarsRoverCoordinate({
  loc: [1, 2],
  inst: "LMLMLMLMM" //instructions example
  });

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
