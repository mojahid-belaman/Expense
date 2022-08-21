import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredprice, setEnteredPrice] = useState('');
    const [entereddate, setEnteredDate] = useState('');

    const handleChangeTitle = (e) => setEnteredTitle(e.target.value);
    const handleChangePrice = (e) => setEnteredPrice(e.target.value);
    const handleChangeDate = (e) => setEnteredDate(e.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (enteredtitle === '' || enteredprice === '' || entereddate === '') {
            Swal.fire({
                title: 'Error!',
                text: 'Please Entered all Field...',
                icon: 'error',
                confirmButtonText: 'Cancel',
                confirmButtonColor: '#f50057',
            })
        }
        else {
            const expenseData = {
                title: enteredtitle,
                price: enteredprice,
                date: entereddate
            }
            props.onSaveExpenseData(expenseData)
            setEnteredTitle('');
            setEnteredPrice('');
            setEnteredDate('');
            Swal.fire(({
                title: 'Done!',
                text: 'Add Expense Successfully...',
                icon: 'success',
                confirmButtonText: 'Cancel',
                confirmButtonColor: '#2e7d32',
            }))
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='expenseForm___controls'>
            <div className='expenseForm__control'>
                <label>Title</label>
                <input type='text' placeholder='Enter Title...' value={enteredtitle} onChange={handleChangeTitle} />
            </div>
            <div className='expenseForm__control'>
                <label>Price</label>
                <input type='number' min="0.01" step="0.01" placeholder='Enter Price...' value={enteredprice} onChange={handleChangePrice} />
            </div>
            <div className='expenseForm__control'>
                <label>Date</label>
                <input type='date' value={entereddate} onChange={handleChangeDate} />
            </div>

        </div>
        <div className='expenseForm__button'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm