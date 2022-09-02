/* eslint-disable operator-linebreak */
/* eslint-disable eqeqeq */
import Button from './Button'
import { useState, useEffect } from 'react'
import { SpinnerWidget } from './Spinner'
import { getOptions, newRandomQuestion } from '@/firebase/services'

function Question () {
  const [loading, setLoading] = useState(true)
  const [options, setOptions] = useState([])
  const [result, setResult] = useState([])
  const [question, setQuestion] = useState({})
  const [questionCounter, setQuestionCounter] = useState([])

  useEffect(() => {
    setLoading(true)
    if (questionCounter.length < 5) {
      newRandomQuestion()
        .then(res => {
          setQuestion(res)
          getOptions(res)
            .then(data => setOptions(data))
        })
        .finally(() => {
          setLoading(false)
        })
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
            <Button action={getResult} id={result[0]}>{options[0] ? options[0].answer : ''}</Button>
            <Button action={getResult} id={result[1]}>{options[1] ? options[1].answer : ''}</Button>
            <Button action={getResult} id={result[2]}>{options[2] ? options[2].answer : ''}</Button>
          </div>
        </>}
    </>
  )
}

export default Question
