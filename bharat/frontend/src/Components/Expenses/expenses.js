import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useGlobalcontext } from '../../context/GlobalContext';
import { Innerlayout } from '../../styles/layouts';
import IncomeItem from '../incomeitem/incomeitem';
import ExpenseForm from './expenseform';

function Expenses() {
  const {addIncome,expenses,getExpenses,deleteExpense,totalExpense}=useGlobalcontext()

  useEffect(()=>{
    getExpenses()
  },[])
  return (
    <ExpenseStyled>
      <Innerlayout>
        <h1>Expenses</h1>
        <h2 className="total-income">Total Expense : <span>₹ {totalExpense()}</span></h2>
        <div className="income-content">
            <div className="form-container">
              <ExpenseForm/>
            </div>
            <div className="incomes">
              {expenses.map((expense)=>{
                const {_id,title,amount,type,date,category,description}=expense;
                return <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  type={type}
                  date={date}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              })}
            </div>
        </div>
      </Innerlayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
    display:flex;
    overflow:auto;
    .total-income{
      display:flex;
      justify-content:center;
      align-items: center;
      background: #FCF6F9;
      border: 2px xolid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
      border-radius:20px;
      padding:1rem;
      margin: 1rem 0;
      font-size:2rem;
      gap:.5rem;
      span{
        font-sixe: 2.5rem;
        font-weight: 800;
        color:var(--color-green);
      }
    }
    .income-content{
      display:flex;
      gap:2rem;
      .incomes{
        flex:1;
      }
    }
`;


export default Expenses
