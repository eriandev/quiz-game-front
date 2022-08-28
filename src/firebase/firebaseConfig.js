import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC2SbnNe_6MNnDHaHzgbjemWxrX_OByGEo',
  authDomain: 'quiz-game-fc9eb.firebaseapp.com',
  projectId: 'quiz-game-fc9eb',
  storageBucket: 'quiz-game-fc9eb.appspot.com',
  messagingSenderId: '201119310801',
  appId: '1:201119310801:web:407ebca59e664e000776f0'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
