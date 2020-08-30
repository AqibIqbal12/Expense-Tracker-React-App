import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import {transactionType} from '../Types/types';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    //console.log(transactions);

    const amounts: number[] = transactions.map((transaction: transactionType) => transaction.amount);
    
    // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const total = amounts.length === 0 ? 0 : amounts.reduce((total: number, num: number) => {

        return (total = total + num);

    }, 0).toFixed(2);

    //console.log(total);
    return (
        <>
            <div className="bal_container">
                <h4>Your Balance</h4>
                <h1>${total}</h1>
            </div>
        </>
    )
}
