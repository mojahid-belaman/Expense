import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }
  return (
    <form>
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