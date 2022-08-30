import Link from '../components/Link.jsx'
import Title from '../components/Title.jsx'
import Back from '../components/Back.jsx'

function Logged () {
  return (
    <>
      <header className='welcomeHeader'>
        <h2 className='welcome'>Hi, "USERNAME"</h2>
      </header>
      <main>
        <Title>QUIZ GAME</Title>
        <section className='menu'>
          <Link className='btn' href='/newChallenge'>NEW CHALLENGE</Link>
          <Link className='btn' href='/myScore'>MY SCORE</Link>
          <Link className='btn' href='/topUsers'>TOP USERS</Link>
        </section>
      </main>
      <Back />
    </>
  )
}

export default Logged
