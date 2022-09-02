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
}

export async function getOptions (doc) {
  const optionsFound = query(collection(db, 'answers'), where('questionId', '==', doc.id))
  return await getDocs(optionsFound)
    .then(res => {
      const optionsToSet = res.docs.map(doc => {
        return doc.data()
      })
      return optionsToSet.sort(() => Math.random() - 0.5)
    })
}
