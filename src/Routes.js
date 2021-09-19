import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import BankContexProvider from "./contexts/BankContex";
import AllAmmount from "./pages/AllAmmount";
import Lgoin from "./pages/Lgoin";
import Transaction from "./pages/Transaction";

const Routes = () => {
  return (
    <BankContexProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Lgoin} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/ammount" component={AllAmmount} />
        </Switch>
      </BrowserRouter>
    </BankContexProvider>
  );
};

export default Routes;
