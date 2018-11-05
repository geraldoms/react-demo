import React, { Component } from "react";
import { Link } from "react-router";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>Example using React and Redux</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
