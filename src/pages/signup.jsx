/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import Button from '@/components/Button.jsx'
import Back from '../components/Back.jsx'
import Title from '../components/Title.jsx'
import Input from '../components/Input.jsx'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import db from '@/firebase/firebaseConfig.js'
import swal from 'sweetalert'
import { useLocation } from 'wouter'
import UserContext from '@/context/index.jsx'

function Signup () {
  const { user, setUser } = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useLocation()

  async function signUp (e) {
    e.preventDefault()
    const usersRef = collection(db, 'users')
    const userSearch = query(usersRef, where('username', '==', username))
    const emailSearch = query(usersRef, where('email', '==', email))
    const userFound = await getDocs(userSearch)
    const emailFound = await getDocs(emailSearch)
    const newUser = {
      email,
      password,
      score: 0,
      maxScore: 0,
      username
    }
    if (!userFound.empty) {
      swal('', 'El usuario ya existe', 'warning')
    } if (!emailFound.empty) {
      swal('', 'El email ya se encuentra registrado', 'warning')
    } else {
      const newUserCreated = await addDoc(usersRef, newUser)
      setUser(newUser)
      console.log(`New user created with ID: ${newUserCreated.id}`)
      swal('', 'Usuario registrado correctamente', 'success')
        .then(() => setLocation('/logged'))
    }
  }

  return (
    <>
      <main>
        <Title>QUIZ GAME</Title>

        <form>
          <section className='inputs'>
            <Input value={username} setValue={setUsername} label='usuario' />
            <Input type='password' value={password} setValue={setPassword} label='constraseña' />
            <Input type='email' value={email} setValue={setEmail} label='email' />
          </section>

          <Button className='btn' action={signUp}>REGISTRARSE</Button>
        </form>
      </main>

      <Back />
    </>
  )
}

export default Signup
