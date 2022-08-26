/* eslint-disable operator-linebreak */
/* eslint-disable eqeqeq */
import Button from './Button'
import db from '@/firebase/firebaseConfig.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { SpinnerWidget } from './Spinner'

function Question ({ question }) {
  const [options, setOptions] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    const optionsFound = question.id ? query(collection(db, 'answers'), where('questionId', '==', question.id)) : null
    if (optionsFound !== null) {
      getDocs(optionsFound)
        .then(res => {
          const optionsToSet = res.docs.map(doc => {
            return { ...doc.data() }
          })
          console.log(optionsToSet)
          setOptions(optionsToSet.sort(() => Math.random() - 0.5))
        })
    }
  }, [question.id])

  const getResult = (e) => {
    const index = options.findIndex(doc => doc.answer == e.target.innerText)
    const correctArray = ['', '', '']
    correctArray[index] = 'btnCorrect'
    const incorrectArray = ['', '', '']
    incorrectArray[index] = 'btnIncorrect'
    options[index].isCorrect === true ? setResult(correctArray) : setResult(incorrectArray)
  }

  return (
    <>
      <h3 className='question'>{question.question}</h3>
      <img className='questionImage' src={question.imgUrl} alt='actor' />
      {options.length == 0 ?
        <SpinnerWidget />
        :
        <div className='answers'>
          <Button action={getResult} id={result[0]}>{options[0].answer}</Button>
          <Button action={getResult} id={result[1]}>{options[1].answer}</Button>
          <Button action={getResult} id={result[2]}>{options[2].answer}</Button>
        </div>}
    </>
  )
}

export default Question
