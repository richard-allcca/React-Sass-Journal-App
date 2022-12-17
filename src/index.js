import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

import "./index.scss";


ReactDOM.render(<App />, document.getElementById("root"));

// NOTE -  comentado por que no se pueda usar redux con react18

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// NOTE - el modo estricto no funciona con react-router-dom v5 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
