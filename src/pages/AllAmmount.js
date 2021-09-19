import React from "react";
import { useContext, useEffect } from "react/cjs/react.development";
import { bankContext } from "../contexts/BankContex";

const AllAmmount = () => {
  const { getAmmount, getBanks, ammounts, banks } = useContext(bankContext);
  let bankName = [];

  useEffect(() => {
    getBanks();
    getAmmount();
  }, []);

  const getBankName = async () => {
    ammounts.forEach((ammount) => {
      banks.forEach((bank) => {
        if (bank.bankId == ammount.idBank) {
          bankName.push({ bankName: bank.name, ammount: ammount.ammount });
        }
      });
    });
  };

  getBankName();
  return (
    <>
      <center>
        <h1>All ammount</h1>
      </center>
      <div className="ammount">
        <div className="ammount-bank">
          <h2>Bank</h2>
          {bankName.map((item, index) => {
            return <p key={index}>{item.bankName}</p>;
          })}
        </div>
        <div className="ammount-bank">
          <h2>Ammount</h2>
          {bankName.map((item, index) => {
            return <p key={index}>{item.ammount}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default AllAmmount;
