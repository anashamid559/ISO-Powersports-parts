import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoute from "./shared/routes/authRoute";

const App = () => (
  <Router>
    <AuthRoute />
  </Router>
);

export default App;
