import React from 'react'
import Card from '../ui/Card'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const savaDataExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: parseInt((Math.random() * 42)).toString()
    }
    props.onAddExpense(expenseData);
  }
  return (
    <Card className="expenses">
        <ExpenseForm onSaveExpenseData={savaDataExpense} />
    </Card>
  )
}

export default NewExpense