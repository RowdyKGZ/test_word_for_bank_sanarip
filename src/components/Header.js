import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <center>
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/transaction"}>
          Add transaction
        </Link>
        <Link className="link" to={"/ammount"}>
          All ammount
        </Link>
      </center>
    </div>
  );
};

export default Header;
