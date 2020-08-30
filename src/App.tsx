import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { initNotification } from './Services/firebaseService';

import firebase from 'firebase/app';
import 'firebase/messaging';
import { GlobalProvider } from './Context/GlobalState';
import './App.css';


function App() {
  if (firebase.messaging.isSupported()) {
    initNotification();
  }

  return (
    <>
      <GlobalProvider>
        <div className="container">
          <h1> <Header /> </h1>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>

      </GlobalProvider>

    </>
  );

}


export default App;
