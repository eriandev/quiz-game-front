import { getRandomId } from '@/utilities/randomId'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from './firebaseConfig'

export async function newRandomQuestion () {
  const questionLength = (await getDocs(collection(db, 'questions'))).docs.length
  const randomId = getRandomId(1, questionLength).toString()
  const randomQuestion = query(collection(db, 'questions'), where('id', '==', randomId))
  return await getDocs(randomQuestion)
    .then(res => {
      const questionGet = (res.docs[0].data())
      return questionGet
    })
    .then(res => {
      res.disorderedOptions = sortOptions(res)
      return res
    })
}

function sortOptions (obj) {
  const disorderedOptions = [obj.correctAnswer, obj.wrongAnswer1, obj.wrongAnswer2]
  console.log(disorderedOptions.sort(() => Math.random() - 0.5))
  return disorderedOptions.sort(() => Math.random() - 0.5)
}
