import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const funcChangeFilter = (e) => {
        props.funcFilter(e.target.value)
    }
  return (
    <div className='filter'>
        <label>Filter By Year: </label>
        <select select={props.selected} onChange={funcChangeFilter}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
    </div>
  )
}

export default ExpenseFilter