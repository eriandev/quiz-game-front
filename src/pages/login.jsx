/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from '@/components/Button.jsx'
import Back from '../components/Back.jsx'
import Title from '../components/Title.jsx'
import Input from '../components/Input.jsx'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '@/firebase/firebaseConfig.js'
import swal from 'sweetalert'
import { useLocation } from 'wouter'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useLocation()

  async function testLogin (e) {
    e.preventDefault()
    const usersRef = collection(db, 'users')
    const user = query(usersRef, where('username', '==', username))
    const userDoc = await getDocs(user)
    userDoc.forEach(doc => {
      if (doc.data().password === password) {
        swal('', 'Puede ingresar', 'success')
          .then(() => setLocation('/logged'))
      } else {
        swal('', 'Usuario/Contraseña incorrecto', 'warning')
      }
    })
  }

  return (
    <>
      <main>
        <Title>QUIZ GAME</Title>

        <form>
          <section className='inputs'>
            <Input value={username} setValue={setUsername} label='usuario' />
            <Input type='password' value={password} setValue={setPassword} label='contraseña' />
          </section>

          <Button className='btn' action={testLogin} href='/logged'>INGRESAR</Button>
        </form>
      </main>

      <Back />
    </>
  )
}

export default Login
