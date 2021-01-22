import React, { useContext } from 'react';
import { Transaction } from './Transaction'
import { GlobalContext } from '../Context/GlobalState';
import {transactionType} from '../Types/types'; 

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>Historysss</h3>

            <ul className="list">
                {
                     transactions.map((transaction: transactionType) => (transaction.text === "" && transaction.amount === 0  ? "" : <Transaction key={transaction.id} transaction = {transaction}  />))
                    //transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction}  />))
                }

            </ul>
        </>
    )
}
