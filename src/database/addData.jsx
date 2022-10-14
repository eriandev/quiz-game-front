import { addDoc, collection } from 'firebase/firestore'
import { useEffect } from 'react'
import db from './firebase/firebaseConfig'

useEffect(() => {
  fetch('...')
    .then((res) => res.json())
    .then((res) => { res.forEach((el) => addDoc(collection(db, 'questions'), el)) })
}, [])
