function Input ({ id, type = 'text', label, value, setValue }) {
  return (
    <>
      <div class='input'>
        <label for={id} class='input-label'>{label}</label>
        <input id={id} type={type} value={value} class='input-field' onChange={e => setValue(e.target.value)} />
      </div>
    </>
  )
}

export default Input
