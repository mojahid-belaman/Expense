import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredprice, setEnteredPrice] = useState('');
    const [entereddate, setEnteredDate] = useState('');
    const handleChangeTitle = (e) => {
        setEnteredTitle(e.target.value);
    }
    const handleChangePrice = (e) => {
        setEnteredPrice(e.target.value);
    }
    const handleChangeDate = (e) => {
        setEnteredDate(e.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (enteredtitle === '' || enteredprice === '' || entereddate === '') {
            console.log("Empty");
        }
        else {
            const expenseData = {
                entitle: enteredtitle,
                price: enteredprice,
                date: entereddate
            }
            console.log(expenseData);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='expenseForm___controls'>
            <div className='expenseForm__control'>
                <label>Title</label>
                <input type='text' placeholder='Enter Title...' onChange={handleChangeTitle} />
            </div>
            <div className='expenseForm__control'>
                <label>Price</label>
                <input type='number' min="0.01" step="0.01" placeholder='Enter Price...' onChange={handleChangePrice} />
            </div>
            <div className='expenseForm__control'>
                <label>Date</label>
                <input type='date' onChange={handleChangeDate} />
            </div>

        </div>
        <div className='expenseForm__button'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm