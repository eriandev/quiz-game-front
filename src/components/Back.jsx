import { Link } from 'wouter'

function Back () {
  return (
    <Link href='/'>
      <a class='back'>
        <svg width='40' height='36' viewBox='0 0 40 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 18L17.931 0V9.69231H40V26.3077H17.931V36L0 18Z' fill='white' />
        </svg>
      </a>
    </Link>
  )
}

export default Back
