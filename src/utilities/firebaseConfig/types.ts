// eslint-disable-next-line import/named
import { Persistence } from 'firebase/auth'

// type FirebasePersistenceValue = boolean | string | number
export interface FirebasePersistence extends Persistence {
  getItem: (key: string) => Promise<string | null>
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}
