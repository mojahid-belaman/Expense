import React from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
  return (
    <form>
        <div className='expenseForm___controls'>
            <div className='expenseForm__control'>
                <label>Title</label>
                <input type='text' />
            </div>
            <div className='expenseForm__control'>
                <label>Price</label>
                <input type='number' min="0.01" step="0.01" />
            </div>
            <div className='expenseForm__control'>
                <label>Date</label>
                <input type='date' />
            </div>
            <div className='expenseForm__control'>
                <button type='submit'>Add Expense</button>
            </div>

        </div>
    </form>
  )
}

export default ExpenseForm