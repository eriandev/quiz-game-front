import UserContext from '@/context/index.jsx'
import { useContext } from 'react'
import Heart from '../components/Heart.jsx'

function Header () {
  const { user } = useContext(UserContext)

  return (
    <header className='headerUserStatus'>
      <span className='score'>{user.score}</span>
      <span className='username'>{user.username}</span>
      <div className='lives'>
        <Heart />
        <Heart />
      </div>
    </header>
  )
}

export default Header
