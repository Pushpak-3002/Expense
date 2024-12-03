import React, { useContext, useState } from "react"

import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/v1/"

const Globalcontext = React.createContext()

export const GlobalProvider = ({children})=>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

//Incomes
    
const addIncome = async(income) =>{
    const response = await axios.post(`${BASE_URL}add-income`,income)
    .catch((err)=>{
        setError(err.response.data.message)
    })
    getIncomes()
}

const getIncomes = async() =>{
    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncomes(response.data)
    console.log(response.data)
}

const deleteIncome = async (id)=>{
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes()
}

const totalIncome = ()=>{
    let totalIncome = 0;
    incomes.forEach((income)=>{
        totalIncome += income.amount
    })
    return totalIncome;

}

//Expenses

const addExpense = async(income) =>{
    const response = await axios.post(`${BASE_URL}add-expense`,income)
    .catch((err)=>{
        setError(err.response.data.message)
    })
    getExpenses()
}

const getExpenses = async() =>{
    const response = await axios.get(`${BASE_URL}get-expense`)
    setExpenses(response.data)
    console.log(response.data)
}

const deleteExpense = async (id)=>{
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
}

const totalExpense = ()=>{
    let totalIncome = 0;
    expenses.forEach((income)=>{
        totalIncome += income.amount
    })
    return totalIncome;

}

const totalBalance = ()=>{
    return totalIncome() - totalExpense();
}

const transactionHistory = ()=>{
    const history =[...incomes, ...expenses]
    history.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0,3);
}


console.log(totalExpense());

return (
    <Globalcontext.Provider value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpenses,
        expenses,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
        error,
        setError
    }}>
        {children}
    </Globalcontext.Provider>
)
}

export const useGlobalcontext=()=>{
    return useContext(Globalcontext)
}
