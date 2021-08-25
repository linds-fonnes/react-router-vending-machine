import React from "react";
import { Link } from "react-router-dom";
import "./Nuggets.css";

function Nuggets() {
  return (
    <div>
      <p className="Nuggets-link">
        <Link className="Nuggets-link" exact to="/">
          Back
        </Link>
      </p>
      <div>
        <iframe
          className="Nuggets"
          src="https://giphy.com/embed/HcRD0S7k8Mrm0"
        ></iframe>
      </div>
    </div>
  );
}

export default Nuggets;
