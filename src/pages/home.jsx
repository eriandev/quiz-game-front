import Link from '../components/Link.jsx'
import Title from '../components/Title.jsx'

function Home () {
  return (
    <main>
      <Title>QUIZ GAME</Title>
      <section className='actions'>
        <Link className='btn' href='/login'>LOG IN</Link>
        <Link className='btn' href='/signup'>SIGN UP</Link>
      </section>
    </main>
  )
}

export default Home
