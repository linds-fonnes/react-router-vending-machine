import React from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  return (
    <div>
      <p className="Chips-link">
        <Link className="Chips-link" exact to="/">
          Back
        </Link>
      </p>
      <div>
        <iframe
          className="Chips"
          src="https://giphy.com/embed/GimCwtmZ7SzIfOov5a/video"
        ></iframe>
      </div>
    </div>
  );
}

export default Chips;
