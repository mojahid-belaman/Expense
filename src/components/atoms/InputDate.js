const InputDate = (props) => {
    return (
        <input className='p-2 rounded-lg outline-none border border-[#039be5] mt-2 text-[#616161]' type='date' value={props.value} onChange={props.onChange} />
    )
}

export default InputDate;