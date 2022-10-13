/* eslint-disable operator-linebreak */
/* eslint-disable eqeqeq */
import Button from './Button'
import { useState, useEffect } from 'react'
import { SpinnerWidget } from './Spinner'
import { newRandomQuestion } from '@/firebase/services'

function Question () {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState([])
  const [question, setQuestion] = useState({})
  const [questionCounter, setQuestionCounter] = useState([])

  useEffect(() => {
    setLoading(true)
    if (questionCounter.length < 5) {
      newRandomQuestion()
        .then(res => {
          setQuestion(res)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [questionCounter])

  function getResult (e) {
    e.preventDefault()
    const selectedAnswer = e.target.innerText
    const index = question.disorderedOptions.findIndex(el => el === selectedAnswer)
    const correctArray = ['', '', '']
    correctArray[index] = 'btnCorrect'
    const incorrectArray = ['', '', '']
    incorrectArray[index] = 'btnIncorrect'
    selectedAnswer === question.correctAnswer ? setResult(correctArray) : setResult(incorrectArray)
    setTimeout(() => nextQuestion(), 1000)
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
            <Button action={getResult} id={result[0]}>{question.disorderedOptions[0]}</Button>
            <Button action={getResult} id={result[1]}>{question.disorderedOptions[1]}</Button>
            <Button action={getResult} id={result[2]}>{question.disorderedOptions[2]}</Button>
          </div>
        </>}
    </>
  )
}

export default Question
