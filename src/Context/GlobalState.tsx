import React, { createContext, useReducer, useState, ReactNode,} from 'react';
import AppReducer from './AppReducer';
import {transactionType , initialStateType} from '../Types/types'

//Initial State
const initialState: initialStateType = {
    transactions: [
        // { id: 1, text: 'Salary', amount: 5000 },
    ],
    
    deleteTransaction: () => {},
    updateTransaction: () => {},
    addIncome: () => {},
    addExpense: () => {},
    Reset: () => {}
    
}


//Create Context
export const GlobalContext  = createContext(initialState);

//Provider Component
export const GlobalProvider: React.FC<ReactNode> = ({ children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    let [flag, setFlag] = useState(false);
    
    //Actions will be sent to reducer
    function deleteTransaction(id: number) {

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function updateTransaction(transaction: transactionType) {
                
        dispatch({
            type: 'UPDATE_TRANSACTION',
            payload: transaction
        });
    }


    function addIncome(transaction: transactionType) {
        setFlag(false)
        dispatch({
            type: 'ADD_INCOME-OR-EXPENSE',
            payload: transaction
        });
    }

    function addExpense(transaction: transactionType) {
        setFlag(false)
        dispatch({
            type: 'ADD_INCOME-OR-EXPENSE',
            payload: transaction
        });
    }

    function Reset(transaction: object) {
        setFlag(true)
        dispatch({
            type: 'RESET',
            payload: transaction
        });    
    }
    //console.log(state.transactions)

    return (
        <>
        <GlobalContext.Provider value={{
            transactions:  flag ? state.transactions = [] : state.transactions,
            deleteTransaction,
            updateTransaction,
            addIncome,
            addExpense,
            Reset
        }}>
            
            {children}
        </GlobalContext.Provider>
        
        
        </>
    )
}