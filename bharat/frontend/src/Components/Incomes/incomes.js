import React from 'react'
import styled from 'styled-components'
import { Innerlayout } from '../../styles/layouts';
import { useGlobalcontext } from '../../context/GlobalContext';
import Form from '../form/form';
import { useEffect } from 'react';
import IncomeItem from '../incomeitem/incomeitem';

function Incomes() {
  const {addIncome,incomes,getIncomes,deleteIncome,totalIncome}=useGlobalcontext()

  useEffect(()=>{
    getIncomes()
  },[])
  return (
    <IncomesStyled>
      <Innerlayout>
        <h1>Incomes</h1>
        <h2 className="total-income">Total Income: <span>₹ {totalIncome()}</span></h2>
        <div className="income-content">
            <div className="form-container">
              <Form/>
            </div>
            <div className="incomes">
              {incomes.map((income)=>{
                const {_id,title,amount,date,category,description}=income;
                return <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount} date={date}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              })}
            </div>
        </div>
      </Innerlayout>
    </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
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


export default Incomes
