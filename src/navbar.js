import React,{Component} from 'react';
import logo from'./logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Crud from './crud.js';
import Animasi from './animasi.js';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect
// } from 'react-router-dom'
import'./App.css';

// yarn add react-router-dom
//npm i -s react-router-dom
function Navbar() {
  return (
    <Router>
      <div>
        <ul>
          
            <Link to="/">Home</Link>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Crud} />
        <Route path="/about" component={Animasi} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Homen</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>Abouts</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}K
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Navbar;