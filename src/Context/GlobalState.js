import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [
        //{ id: 1, text: 'Flower', amount: -20 },
    ]
}

let flag = false;

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function updateTransaction(transaction) {
                
        dispatch({
            type: 'UPDATE_TRANSACTION',
            payload: transaction
        });
    }


    function addIncome(transaction) {
        flag = false;
        dispatch({
            type: 'ADD_INCOME-OR-EXPENSE',
            payload: transaction
        });
    }

    function addExpense(transaction) {
        flag = false;
        dispatch({
            type: 'ADD_INCOME-OR-EXPENSE',
            payload: transaction
        });
    }

    function Reset(transaction) {
        flag = true;
        dispatch({
            type: 'RESET',
            payload: transaction
        });    
    }
    //console.log(state.transactions)

    return (
        <>
        <GlobalContext.Provider value={{
            transactions: flag ? state.transactions = [] : state.transactions,
            deleteTransaction,
            updateTransaction,
            addIncome,
            addExpense,
            Reset
        }}>
            
            {children}
            {/* <h1>hello</h1> */}
        </GlobalContext.Provider>
        
        
        </>
    )
}