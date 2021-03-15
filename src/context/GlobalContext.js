import React, {createContext, useReducer} from "react";

import GlobalReducer from "./GlobalReducer";

// initial state
const initState = {
    transactions: [
        {
            id: 22,
            title: "this is test item in 15/3",
            amount: -50,
            date: "3/15/2021"
        },
        {
            id: 14,
            title: "this test item 2 in 15/3",
            amount: 60,
            date: "3/15/2021"
        },
        {
            id: 32,
            title: "this test item 3 in 14/3",
            amount: 50,
            date: "3/14/2021"
        },
        {
            id: 12,
            title: "this day item",
            amount: 50,
            date: "3/13/2021"
        },
        {
            id: 33,
            title: "this test item in 13/3",
            amount: 50,
            date: "3/13/2021"
        },
        {
            id: 1,
            title: "the first item",
            amount: -40,
            date: "3/12/2021"
        },
        {
            id: 2,
            title: "the our second item",
            amount: 25,
            date: "3/12/2021"
        },
        {
            id: 3,
            title: "the second item",
            amount: -50,
            date: "3/12/2021"
        },
        {
            id: 4,
            title: "the second item",
            amount: 205,
            date: "3/11/2021"
        },
        {
            id: 5,
            title: "the second item",
            amount: -35,
            date: "3/11/2021"
        },
        {
            id: 6,
            title: "the third item",
            amount: 100,
            date: "3/10/2021"
        }
    ]
}

// create global context
export const GlobalContext = createContext(initState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(GlobalReducer, initState);

    // ACTIONS

    // delete transaction
    const deleteTransaction = item => {
        
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: item
        });

    }

    // add new transaction
    const addTransaction = (item) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: item
        })
    }
    
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )

}

