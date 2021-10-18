import React from "react";
import "./App.css";
import Home from "./core/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
