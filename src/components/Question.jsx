import Button from './Button'

function Question () {
  return (
    <>
      <h3 className='question'>Who is this actor?</h3>
      <img className='questionImage' src='./img/benStiller.jpg' alt='actor' />
      <div className='answers'>
        <Button>Ben Affleck</Button>
        <Button>Ben Stiller</Button>
        <Button>Adam Sandler</Button>
      </div>
    </>
  )
}

export default Question
