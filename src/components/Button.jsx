function Button ({ children, action, id }) {
  return <button className='btn' id={id} onClick={action}>{children}</button>
}

export default Button
