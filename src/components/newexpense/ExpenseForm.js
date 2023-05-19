import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import InputText from '../atoms/InputText';
import InputNumber from '../atoms/InputNumber';
import InputDate from '../atoms/InputDate';

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
                price: +enteredprice,
                date: new Date(entereddate),
            }
            console.log(expenseData);
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
            props.onClick()
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col space-x-0 md:space-x-5 md:flex-row mb-0 md:mb-5'>
            <div className='flex-1 flex flex-col justify-center py-2 mb-4 md:mb-0'>
                <Label text={'Title'}/>
                <InputText value={enteredtitle} onChange={handleChangeTitle}/>
            </div>
            <div className='flex-1 flex flex-col justify-center py-2 mb-4 md:mb-0'>
                <Label text={'Price'}/>
                <InputNumber value={enteredprice} onChange={handleChangePrice}/>
            </div>
            <div className='flex-1 flex flex-col justify-center py-2 mb-4 md:mb-0'>
                <Label text={'Date'}/>
                <InputDate value={entereddate} onChange={handleChangeDate}/>
            </div>

        </div>
        <div className='flex justify-center space-x-10'>
            <Button onClick={props.onClick} text={"Cancel"}/>
            <Button type={'submit'} text={"Add Expense"}/>
        </div>
    </form>
  )
}

export default ExpenseForm