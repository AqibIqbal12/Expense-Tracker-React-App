import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import {transactionPropType} from '../Types/types';

export const Transaction: React.FC<transactionPropType> = ({ transaction }) => {
    //console.log(transaction)

    const { updateTransaction, deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const [flag, setFlag] = useState(false);
    const [text, setText] = useState(transaction.text);
    const [amount, setAmount] = useState("");
    let patternForTxt = new RegExp(/^[A-Za-z]+$/);


    const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setAmount(transaction.amount.toString())
        setFlag(true);
    }

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let updatedTransaction;
        e.preventDefault();
        if (text === "" && amount === "") {
            alert("Both fields are required.");
            return false;
        }
        else if (text === "") {
            alert("Text field should not be empty.");
            return false;
        }
        else if (amount === "") {
            alert("Amount field should not be empty.");
            return false;
        }
        else if(!patternForTxt.test(text)){
            alert("Text field should be a string.");
            return false;
        }

        updatedTransaction = {
            id: transaction.id,
            text,
            amount: parseInt(amount) < 0 ? -Math.abs(parseInt(amount)) : Math.abs(parseInt(amount))
        }

        updateTransaction(updatedTransaction);
        setFlag(false);
    }

    if (flag) {
        return (
            <>
                <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">delete</button><button onClick={handleEdit} className="edit-btn">Edit</button>
                </li>

                <h3>Update transaction</h3>
                <form>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <button className="btn-reset" onClick={handleUpdate}>update</button>
                </form>

            </>
        );
    }
    else {

        return (
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn"> <i className="fa fa-trash"></i></button>
                {/* <i className="fas fa-trash"></i> */}
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={handleEdit} className="edit-btn"><i className="fa fa-edit"></i></button>
            </li>
        )
    }



}
