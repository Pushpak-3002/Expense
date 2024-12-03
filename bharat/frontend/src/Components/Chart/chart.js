import React from 'react'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,     
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalcontext } from '../../context/GlobalContext'
import { dateFormat } from '../../utils/dateformat'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes,expenses}= useGlobalcontext()

    const data = {
        labels: incomes.map((inc)=>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income)=>{
                        const {amount} = income;
                        return amount;
                    })
                ],
                backgroundColor:'green',
                tension:0.25
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense)=>{
                        const {amount} = expense;
                        return amount;
                    })
                ],
                backgroundColor:'red',
                tension:0.25
            }
        ]
    }

  return (
    <ChartStyled>
        <Line data={data}/>  
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    padding:1rem;
    border-radius:20px;
    height: 100%;
`;

export default Chart