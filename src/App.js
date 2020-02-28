import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import MovieSearch from "./components/MovieSearch"
import MovieDetail from "./components/MovieDetail";

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
          <Link to="/">HOME</Link> <br/>
          <Link to="/about">About</Link> <br/>
          <Link to="/search">MovieSearch </Link>
        </nav>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/search" component={MovieSearch} />
          <Route path="/moviedetails/:id" component={MovieDetail} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
