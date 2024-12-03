import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useGlobalcontext} from '../../context/GlobalContext';
import Button from '../button/button';
import {plus} from '../../utils/icons'
function ExpenseForm() {
    const {addExpense,getExpenses,error,setError} = useGlobalcontext()
    const [inputState, setInputState] = useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',
    })

    const {title,amount,date,category,description}= inputState;

    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e=>{
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title:'',
            amount:'',
            date:'',
            category:'',
            description:'',
        })
    }

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <div className="input-control">
            <input 
                type="text"
                value={title}
                name={'title'}
                placeholder="Expense Title"
                onChange={handleInput('title')}
            />
        </div>
        <div className="input-control">
            <input value={amount}
                type="text"
                name={'amount'}
                placeholder={'Expense Amount'}
                onChange={handleInput('amount')}
            />
        </div>
        <div className="input-control">
            <DatePicker
                id='date'
                placeholder='Enter A Date'
                selected={date}
                dateFormat="yyyy/mm/dd"
                onChange={(date)=>{
                    setInputState({...inputState,date:date})
                }}
            />
        </div>
        <div className="selects input-control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disable >Select Option</option>
                <option value="education" >Education</option>
                <option value="groceries" >Groceries</option>
                <option value="health" >Health</option>
                <option value="subscription" >Subscription</option>
                <option value="takeaways" >Takeaways</option>
                <option value="clothing" >Clothing</option>
                <option value="travelling" >Travelling</option>
                <option value="other" >Other</option>
            </select>
        </div>
        <div className="input-control">
            <textarea value={description}
                name={'description'}
                placeholder={'Amount Description'}
                id="description"
                cols = "30"
                rows = "4"
                onChange={handleInput('description')}
            ></textarea>
        </div>
        <div className="submit-btn">
            <Button
            name={'Add Expense'}
            icon={plus}
            bpad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent)'}
            color={'#fff'}
            />
        </div>
    </ExpenseFormStyled>
  )
}

const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap:2rem;
    input,textarea,select{
        font-family : inherit;
        font-size:inherit;
        outline:none;
        border:none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize:none;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        color:rgba(34,34,96,0.9);
        &::placeholder{
            color:rgba(34,34,96,0.4)
        }
    }
    .input-control{
        input
        {
            width:100%;
        }
    }
    .selects{
        display:flex;
        justify-content: flex-end;
        select{
            color: rgba(34,34,96,0.4);
            &:focus,&:active{
                color: rgba(34,34,96,1);
            }
        }
    }
    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default ExpenseForm
