/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from 'firebase/app'
import { setPersistence, getAuth, onAuthStateChanged } from 'firebase/auth'
import { FirebasePersistence } from './types.ts'

const AsyncStoragePersistence: FirebasePersistence = {
  type: 'LOCAL',
  getItem: (key: string) => AsyncStorage.getItem(key),
  setItem: (key: string, value: any) => AsyncStorage.setItem(key, value),
  removeItem: (key: string) => AsyncStorage.removeItem(key)
}

const firebaseConfig = {
  apiKey: 'AIzaSyCxGAIjjlWidYlgEquqITMA5vBHjdQuXFs',
  authDomain: 'tuchat-29d28.firebaseapp.com',
  projectId: 'tuchat-29d28',
  storageBucket: 'tuchat-29d28.firebasestorage.app',
  messagingSenderId: '802653687551',
  appId: '1:802653687551:web:178c1ead36f47f194906ca',
  measurementId: 'G-MYW9D172VD'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

setPersistence(auth, AsyncStoragePersistence)
  .then(() => {
    console.log('Persistance set to browser local storage')
  })
  .catch(error => {
    console.log('Failed to setting persistence :', error.message)
  })

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid
    console.log('User is signed in:', uid)
  } else {
    console.log('User is signed out.')
  }
})
