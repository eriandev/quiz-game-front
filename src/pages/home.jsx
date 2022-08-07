import Link from '../components/Link.jsx'
import Title from '../components/Title.jsx'
import Button from '../components/Button.jsx'

function Home () {
  return (
    <main>
      <Title>QUIZ GAME</Title>
      <section className='actions'>
        <Link className='btn' href='/login'>LOG IN</Link>
        <Button>SIGN UP</Button>
      </section>
    </main>
  )
}

export default Home
