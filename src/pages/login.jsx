import { useState } from 'react'
import Back from '../components/Back.jsx'
import Title from '../components/Title.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <main>
        <Title>QUIZ GAME</Title>

        <form>
          <section class='inputs'>
            <Input value={username} setValue={setUsername} label='username' />
            <Input type='password' value={password} setValue={setPassword} label='password' />
          </section>

          <Button>LOG IN</Button>
        </form>
      </main>

      <Back />
    </>
  )
}

export default Login
