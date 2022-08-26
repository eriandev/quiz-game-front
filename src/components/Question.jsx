/* eslint-disable eqeqeq */
import Button from './Button'
import db from '@/firebase/firebaseConfig.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'

function Question ({ question }) {
  const [options, setOptions] = useState([])

  useEffect(() => {
    const optionsFound = question.id ? query(collection(db, 'answers'), where('questionId', '==', question.id)) : null
    if (optionsFound !== null) {
      getDocs(optionsFound)
        .then(res => {
          const optionsToSet = res.docs.map(doc => {
            return { ...doc.data() }
          })
          setOptions(optionsToSet)
        })
    }
  }, [question.id])

  return (
    <>
      <h3 className='question'>{question.question}</h3>
      <img className='questionImage' src={question.imgUrl} alt='actor' />
      <div className='answers'>
        <Button>{options.length > 0 ? options[0].answer : ''}</Button>
        <Button>{options.length > 0 ? options[1].answer : ''}</Button>
        <Button>{options.length > 0 ? options[2].answer : ''}</Button>
      </div>
    </>
  )
}

export default Question
