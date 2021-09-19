import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
  );
};

export default Header;
