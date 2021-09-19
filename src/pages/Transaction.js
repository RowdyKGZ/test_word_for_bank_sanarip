import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { bankContext } from "../contexts/BankContex";

const Transaction = () => {
  const { getBanks, banks, setAmmountBank } = useContext(bankContext);
  const [idBank, setIdBank] = useState(0);

  useEffect(() => {
    getBanks();
  }, []);

  const setNameBank = (event) => {
    setIdBank(event.target.value);
  };

  const sendAmount = (event) => {
    event.preventDefault();

    const ammount = document.querySelector(".ammount").value;
    setAmmountBank(idBank, ammount);

    document.querySelector(".ammount").value = "";
  };

  return (
    <center>
      <div className="marginTop">
        <p>Bank</p>
        <form>
          <select onChange={setNameBank}>
            {banks.map((item) => (
              <option key={item.id} value={item.bankId}>
                {item.name}
              </option>
            ))}
          </select>
          <p>Ammount</p>
          <input className="ammount input" type="number" />

          <input onClick={sendAmount} type="submit" value="Отправить" />
        </form>
      </div>
    </center>
  );
};

export default Transaction;
