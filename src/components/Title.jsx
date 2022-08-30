function Title ({ tag = 'h1', children }) {
  const CustomTag = tag

  return <CustomTag className='title'>{children}</CustomTag>
}

export default Title
