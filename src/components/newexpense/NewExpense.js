import React from 'react'
import Card from '../ui/Card'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () => {
  return (
    <Card className="expenses">
        <ExpenseForm />
    </Card>
  )
}

export default NewExpense