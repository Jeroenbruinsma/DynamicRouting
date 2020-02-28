import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

function HomePage() {
  return <h1>HOME!</h1>;
}

function AboutPage() {
  return (
    <div>
      <h2>ABOUT... </h2>
      <Link to="/"> Go back home </Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
