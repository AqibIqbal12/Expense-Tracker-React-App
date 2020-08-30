import { actionType, transactionType} from '../Types/types'

export default (state: {transactions: transactionType[];}, action: actionType) => {

    switch (action.type) {

        case 'DELETE_TRANSACTION':{
            return { transactions: state.transactions.filter((transaction: transactionType) => transaction.id !== action.payload) }
        }

        case 'UPDATE_TRANSACTION': {
            
            state.transactions.map((curValue: transactionType)=>{
                if(curValue.id  === action.payload.id){
                    return(
                    curValue.text = action.payload.text,
                    curValue.amount = action.payload.amount
                    )
                }
                return(null)
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