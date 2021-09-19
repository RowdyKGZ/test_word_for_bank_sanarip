import React, { useEffect } from "react";
import { useReducer } from "react/cjs/react.development";
import axios from "axios";

export const bankContext = React.createContext();

const INIT_STATE = {
  banks: [],
  ammounts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_BANKS":
      return {
        ...state,
        banks: action.payload.data,
      };
    case "GET_AMMOUNT":
      return {
        ...state,
        ammounts: action.payload.data,
      };
    default:
      return state;
  }
};

const BankContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getBanks = async () => {
    try {
      const data = await axios("http://127.0.0.1:8000/banks");
      dispatch({
        type: "GET_BANKS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const setAmmountBank = async (idBank, ammount) => {
    try {
      let res = await axios.post(`http://127.0.0.1:8000/ammounts`, {
        idBank,
        ammount,
      });
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const getAmmount = async () => {
    try {
      let data = await axios(`http://127.0.0.1:8000/ammounts`);
      dispatch({
        type: "GET_AMMOUNT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <bankContext.Provider
      value={{
        banks: state.banks,
        ammounts: state.ammounts,
        getBanks,
        setAmmountBank,
        getAmmount,
      }}
    >
      {children}
    </bankContext.Provider>
  );
};

export default BankContexProvider;
