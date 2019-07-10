import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="jumbotron">
      <h1>Avery's Organics</h1>
      <Link to="/">Home</Link> |{" "}
      <Link to="/produce-availability">Produce availability</Link>
    </div>
  );
}

export default Header;
