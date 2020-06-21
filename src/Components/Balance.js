import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState'; 

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    //console.log(transactions);

    const amounts = transactions.map(transaction => transaction.amount);
    //console.log(amounts);
    // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const total = amounts === 0 ? 0 : amounts.reduce((acc, item)=>{

        return (acc = acc + item);
        
    },0).toFixed(2);

    //console.log(total);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
