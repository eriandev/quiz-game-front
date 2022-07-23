import Title from './components/Title.jsx'
import Button from './components/Button.jsx'

function App () {
  return (
    <main>
      <Title>QUIZ GAME</Title>
      <section className='actions'>
        <Button>LOG IN</Button>
        <Button>SIGN UP</Button>
      </section>
    </main>
  )
}

export default App
