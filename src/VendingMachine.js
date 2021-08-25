import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine-bg">
      <div className="VendingMachine-container">
        <p>
          Welcome to the Vending Machine ✨<br></br> Please Select Your Order{" "}
        </p>
      </div>
      <div className="VendingMachine-container">
        <p>
          <Link exact to="/drink">
            Drink
          </Link>
        </p>
        <p>
          <Link exact to="/chips">
            Chips
          </Link>
        </p>
        <p>
          <Link exact to="/nuggets">
            Nuggets
          </Link>
        </p>
      </div>
    </div>
  );
}

export default VendingMachine;
