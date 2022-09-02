/* eslint-disable operator-linebreak */
/* eslint-disable eqeqeq */
import Button from './Button'
import db from '@/firebase/firebaseConfig.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { SpinnerWidget } from './Spinner'

function Question () {
  const [loading, setLoading] = useState(true)
  const [options, setOptions] = useState([])
  const [result, setResult] = useState([])
  const [question, setQuestion] = useState({})
  const [questionCounter, setQuestionCounter] = useState([])

  function getRandomId (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  async function newQuestion () {
    const questionLength = (await getDocs(collection(db, 'questions'))).docs.length
    const randomId = getRandomId(1, questionLength).toString()
    const randomQuestion = query(collection(db, 'questions'), where('id', '==', randomId))
    return await getDocs(randomQuestion)
      .then(res => {
        const questionGet = (res.docs[0].data())
        setQuestion(questionGet)
        return questionGet
      })
  }

  async function getOptions (el) {
    const optionsFound = el.id ? query(collection(db, 'answers'), where('questionId', '==', el.id)) : null
    if (optionsFound !== null) {
      return await getDocs(optionsFound)
        .then(res => {
          const optionsToSet = res.docs.map(doc => {
            return doc.data()
          })
          setOptions(optionsToSet.sort(() => Math.random() - 0.5))
          return optionsToSet
        })
    }
  }

  useEffect(() => {
    if (questionCounter.length < 5) {
      newQuestion()
        .then(res => getOptions(res))
        .finally(() => setLoading(false))
    }
  }, [questionCounter])

  function getResult (e) {
    e.preventDefault()
    const index = options.findIndex(doc => doc.answer == e.target.innerText)
    const correctArray = ['', '', '']
    correctArray[index] = 'btnCorrect'
    const incorrectArray = ['', '', '']
    incorrectArray[index] = 'btnIncorrect'
    options[index].isCorrect === true ? setResult(correctArray) : setResult(incorrectArray)
    setTimeout(() => nextQuestion(), 1500)
  }

  function nextQuestion () {
    setResult([])
    setQuestionCounter([...questionCounter, question.id])
  }

  return (
    <>
      {loading === true ?
        <SpinnerWidget />
        :
        <>
          <div className='categoryBox'>
            <h2>{question.category}</h2>
          </div>
          <h3 className='question'>{question.question}</h3>
          <img className='questionImage' src={question.imgUrl} alt='actor' />
          <div className='answers'>
            <Button action={getResult} id={result[0]}>{options[0].answer}</Button>
            <Button action={getResult} id={result[1]}>{options[1].answer}</Button>
            <Button action={getResult} id={result[2]}>{options[2].answer}</Button>
          </div>
        </>}
    </>
  )
}

export default Question
