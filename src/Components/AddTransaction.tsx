import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import {transactionType} from '../Types/types' 

export const AddTransaction = () => {

    let { addIncome, addExpense, Reset} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('0');
    let patternForTxt = new RegExp(/^[A-Za-z]+$/);
    
    const handleIncome = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        
        let newTransaction: transactionType;

        if(patternForTxt.test(text) && parseInt(amount) < 0){
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: Math.abs(parseInt(amount))
            }
        }

        else if(text === "" && amount === ""){
            
            alert("Both fields are required.");
            return false;
        }
        else if(text === ""){
            alert("Text field should not be empty.");
            return false;
        }
        else if(!patternForTxt.test(text)){
            alert("Text field should be a string.");
            return false;
        }
        if(amount === ""){
            alert("Amount field should not be empty.");
            return false;
        }
        else if((text !== "" && amount === '0')){
            alert("Amount should not be 0.");
            return false;
        }
        else{
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: Math.abs(parseInt(amount))
            }
            
        }                
        addIncome(newTransaction);
        setText("");
        setAmount("");
    }

    const handleExpense = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        
        let newTransaction;
        // if(patternForTxt.test(text) && amount < '0'){
        //     console.log("if")
        //     newTransaction = {
        //         id: Math.floor(Math.random() * 100000000),
        //         text,
        //         amount: Math.abs(parseInt(amount))
        //     }
        // }

         if(text === "" && amount === ""){
            
            alert("Both fields are required.");
            return false;
        }
        else if(text === ""){
            alert("Text field should not be empty.");
            return false;
        }
        else if(!patternForTxt.test(text)){
            alert("Text field should be a string.");
            return false;
        }
        if(amount === ""){
            alert("Amount field should not be empty.");
            return false;
        }
        else if((text !== "" && amount === '0')){
            alert("Amount should not be 0.");
            return false;
        }
        else{
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: -Math.abs(parseInt(amount))
            }
            
        }                
                
        addExpense(newTransaction);
        setText("");
        setAmount("");

    }

    
    const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        const emptyObj = {};
        Reset(emptyObj);
        
    }

    return (

        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" pattern="[0-9]*" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div className="form_btns">
                    <button className="btn-income" onClick = {handleIncome}>Add Income</button>
                    <button className="btn-expense" onClick = {handleExpense}>Add Expense</button>
                </div>
                <button className="btn-reset" onClick = {handleReset}>Reset</button>
                
            </form>
            
        </>
        
        )
}
