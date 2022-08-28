/* eslint-disable operator-linebreak */
import Title from '../components/Title.jsx'
import Category from '../components/Category.jsx'
import Question from '../components/Question.jsx'
import Exit from '../components/Exit.jsx'
import Header from '../components/Header.jsx'
import db from '@/firebase/firebaseConfig.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { SpinnerWidget } from '@/components/Spinner.jsx'

function NewChallenge () {
  const [question, setQuestion] = useState({})

  function getRandomId (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  useEffect(() => {
    const randomId = getRandomId(1, 20).toString()
    const randomQuestion = query(collection(db, 'questions'), where('id', '==', randomId))
    getDocs(randomQuestion)
      .then(res => res.forEach(snap => setQuestion(snap.data())))
  }, [])

  return (
    <>
      <Header />
      <main>
        {question.imgUrl ?
          <>
            <Title>QUIZ GAME</Title>
            <Category category={question.category} />
            <Question question={question} />
          </>
          : <SpinnerWidget />}
      </main>
      <Exit />
    </>
  )
}

export default NewChallenge
