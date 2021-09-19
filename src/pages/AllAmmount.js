import React from "react";
import { useContext, useEffect } from "react/cjs/react.development";
import { bankContext } from "../contexts/BankContex";

const AllAmmount = () => {
  const { getAmmount, ammounts } = useContext(bankContext);

  useEffect(() => {
    getAmmount();
  }, []);

  return (
    <>
      <center>
        <h1>All ammount</h1>
      </center>
      <div className="ammount">
        <div className="ammount-bank">
          <h2>Bank</h2>
          {ammounts.map((item, index) => {
            return <p key={index}>{item.nameBank}</p>;
          })}
        </div>
        <div className="ammount-bank">
          <h2>Ammount</h2>
          {ammounts.map((item, index) => {
            return <p key={index}>{item.ammount}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default AllAmmount;
