import Heart from '../components/Heart.jsx'

function Header () {
  return (
    <header className='headerUserStatus'>
      <span className='score'>15pts</span>
      <span className='username'>"USERNAME"</span>
      <div className='lives'>
        <Heart />
        <Heart />
      </div>
    </header>
  )
}

export default Header
