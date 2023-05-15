import React from 'react'
import Label from '../atoms/Label'

const ExpenseFilter = (props) => {
    const funcChangeFilter = (e) => {
        props.onChangeFilter(e.target.value)
    }
  return (
    <div className='flex justify-between items-center mb-5'>
        <Label text={'Filter By Year: '}/>
        <select className='p-2 rounded-lg outline-none border border-[#039be5] text-[#616161]' select={props.selected} onChange={funcChangeFilter}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
    </div>
  )
}

export default ExpenseFilter