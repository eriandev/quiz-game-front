function Input ({ id, type = 'text', label, value, setValue }) {
  return (
    <>
      <div className='input'>
        <label htmlFor={id} className='input-label'>{label}</label>
        <input id={id} type={type} value={value} className='input-field' onChange={e => setValue(e.target.value)} />
      </div>
    </>
  )
}

export default Input
