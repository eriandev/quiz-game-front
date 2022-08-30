import { useState } from 'react'
import Link from '../components/Link.jsx'
import Back from '../components/Back.jsx'
import Title from '../components/Title.jsx'
import Input from '../components/Input.jsx'

function Signup () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <main>
        <Title>QUIZ GAME</Title>

        <form>
          <section className='inputs'>
            <Input value={username} setValue={setUsername} label='username' />
            <Input type='password' value={password} setValue={setPassword} label='password' />
            <Input type='email' value={email} setValue={setEmail} label='email' />
          </section>

          <Link className='btn' href='/logged'>SIGN UP</Link>
        </form>
      </main>

      <Back />
    </>
  )
}

export default Signup
