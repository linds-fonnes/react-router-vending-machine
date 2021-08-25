import React from "react";
import { Link } from "react-router-dom";
import "./Drink.css";

function Drink() {
  return (
    <div>
      <p className="Drink-link">
        <Link className="Drink-link" exact to="/">
          Back
        </Link>
      </p>
      <div>
        <iframe
          className="Drink"
          src="https://giphy.com/embed/GuR3H9KphPNiyq281O/video"
        ></iframe>
      </div>
    </div>
  );
}

export default Drink;
