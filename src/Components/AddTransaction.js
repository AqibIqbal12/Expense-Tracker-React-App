import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState'; 

export const AddTransaction = () => {

    let { addIncome, addExpense, Reset} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


    const handleIncome = e =>{
        e.preventDefault();
        let newTransaction;

        if(text !== "" && amount < 0){
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: Math.abs(amount)
            }
        }

        else if((text === "" && amount === "")){
            alert("Both fields are required.");
            return false;
        }
        else if(!isNaN(text)){
            alert("Text field should be a string.");
            return false;
        }
        else if((text !== "" && amount == 0)){
            alert("Amount should not be 0.");
            return false;
        }
        else{
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: Math.abs(amount)
            }
            
        }
                
        addIncome(newTransaction);
        setText("");
        setAmount("");
    }

    const handleExpense = e =>{
        e.preventDefault();

        let newTransaction;
         if(text !== "" && amount < 0){
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: -Math.abs(amount)
            }
        }
        else if((text === "" && amount === "")){
            alert("Both fileds are required.");
            return false;
    
        }
        
        else if(!isNaN(text)){
            alert("Text field should be a string.");
            return false;
        }
        else if((text !== "" && amount == 0)){
            alert("Amount should not be 0.");
            return false;
        }
                
        else{
            newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: -Math.abs(amount)
            }
        }
                
        addExpense(newTransaction);
        setText("");
        setAmount("");

    }

    
    const handleReset = e =>{
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
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn-income" onClick = {handleIncome} required>Add Income</button>
                <button className="btn-expense" onClick = {handleExpense}>Add Expense</button>
                <button className="btn-reset" onClick = {handleReset}>Reset</button>
            </form>
            
        </>
        
        )
}
