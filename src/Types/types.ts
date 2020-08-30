export type initialStateType = {
    transactions: transactionType[]
    deleteTransaction: (id: number) => void
    updateTransaction: (transaction: transactionType) => void
    addIncome: (transaction: transactionType) => void
    addExpense: (transaction: transactionType) => void
    Reset: (transaction: object) => void
       
}

export type transactionType = {
    id: number
    text: string
    amount: number
}

export type actionType = {
    type: string
    payload: any
       
}

export type transactionPropType = {
    transaction: transactionType
}






