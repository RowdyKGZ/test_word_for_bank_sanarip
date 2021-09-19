import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { bankContext } from "../contexts/BankContex";

const Transaction = () => {
  const { getBanks, banks, setAmmountBank } = useContext(bankContext);

  useEffect(() => {
    getBanks();
  }, []);

  let idBank = 0;
  const sendAmount = (event) => {
    event.preventDefault();
    if (+event.target.value === +event.target.value) {
      idBank = +event.target.value;
    }

    const ammount = document.querySelector(".ammount").value;
    if (ammount && idBank) {
      setAmmountBank(idBank, ammount);
    }

    document.querySelector(".ammount").value = "";
  };

  console.log(banks);
  return (
    <center>
      <div className="marginTop">
        <p>Bank</p>
        <form>
          <select
            onChange={(event) => {
              sendAmount(event);
            }}
          >
            {banks.map((item) => (
              <option key={item.id} value={item.bankId}>
                {item.name}
              </option>
            ))}
          </select>
          <p>Ammount</p>
          <input className="ammount" type="number" />

          <input onClick={sendAmount} type="submit" value="Отправить" />
        </form>
      </div>
    </center>
  );
};

export default Transaction;
