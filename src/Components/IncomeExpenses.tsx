import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import {transactionType} from '../Types/types';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts: number[] = transactions.map((transaction: transactionType) => transaction.amount);

    const income = amounts
        .filter((item: number) => item > 0)
        .reduce((total: number, num: number) => (total += num), 0)
        .toFixed(2);


    const expense = (
        amounts.filter((item: number) => item < 0).reduce((total: number, num: number) => (total += num), 0) *
        -1
    ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}
