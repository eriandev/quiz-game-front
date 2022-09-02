/* eslint-disable operator-linebreak */
import Title from '../components/Title.jsx'
import Question from '../components/Question.jsx'
import Exit from '../components/Exit.jsx'
import Header from '../components/Header.jsx'

function NewChallenge () {
  return (
    <>
      <Header />
      <main>
        <Title>QUIZ GAME</Title>
        <Question />
      </main>
      <Exit />
    </>
  )
}

export default NewChallenge
