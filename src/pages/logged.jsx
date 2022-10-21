import Link from '../components/Link.jsx'
import Title from '../components/Title.jsx'
import Back from '../components/Back.jsx'
import { useContext } from 'react'
import UserContext from '@/context/index.jsx'

function Logged () {
  const { user } = useContext(UserContext)

  return (
    <>
      <header className='welcomeHeader'>
        <h2 className='welcome'>Hola, {user.username}</h2>
      </header>
      <main>
        <Title>QUIZ GAME</Title>
        <section className='menu'>
          <Link className='btn' href='/newChallenge'>NUEVO DESAFÍO</Link>
          <Link className='btn' href='/myScore'>MI PUNTAJE</Link>
          <Link className='btn' href='/topUsers'>USUARIOS TOP</Link>
        </section>
      </main>
      <Back />
    </>
  )
}

export default Logged
