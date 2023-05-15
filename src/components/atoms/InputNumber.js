const InputNumber = (props) => {
    return (
        <input className='p-2 rounded-lg outline-none border border-[#039be5] mt-2 text-[#616161]' type='number' min="0.01" step="0.01" placeholder='Enter Price...' value={props.value} onChange={props.onChange} />
    )
}

export default InputNumber;
