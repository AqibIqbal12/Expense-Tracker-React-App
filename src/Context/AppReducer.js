export default (state, action) => {
    
    switch (action.type) {

        case 'DELETE_TRANSACTION':{
            return { transactions: state.transactions.filter(transaction => transaction.id !== action.payload) }
        }

        case 'UPDATE_TRANSACTION': {
            
            state.transactions.map((curValue)=>{
                if(curValue.id  === action.payload.id){
                    return(
                    curValue.text = action.payload.text,
                    curValue.amount = action.payload.amount
                    )
                }
            })
            
            return { transactions: [...state.transactions] }
        }

        case 'ADD_INCOME-OR-EXPENSE':{
            
            return { transactions: [action.payload, ...state.transactions] }
        }

        case 'RESET':{

            return { transactions: [action.payload] }
        }
        default:
            return state;
    }
}