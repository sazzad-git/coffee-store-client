import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "10px 20px",
      }}
    >
      <Link style={{ background: "#333" }} to="/">
        Home
      </Link>
      <Link style={{ background: "#333" }} to="/addCoffee">
        Add Coffee
      </Link>
      <Link style={{ background: "#333" }} to="/updateCoffee">
        Update Coffee
      </Link>
    </div>
  );
};

export default Navbar;
