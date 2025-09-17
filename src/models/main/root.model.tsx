/* eslint-disable @typescript-eslint/no-explicit-any */
import { IModelDefinitions } from '@lynx-state'

export type IStateRoot = {
  lists: Array<any>
}

export type IActionRoot = {
  onLoadList: () => void
}

const RootModel: IModelDefinitions<IStateRoot, IActionRoot> = {
  name: 'root',
  subscriptions:
    (_, useActions) =>
    ({ route }) => {
      if (route.name === '/' || route.name === '/home')
        useActions<IActionRoot>('root')('onLoadList', [], true)
    },
  model: put => ({
    state: {
      lists: []
    },
    actions: {
      onLoadList() {
        return new Promise((resolve, reject) => {
          try {
            return setTimeout(() => {
              put({ lists: ['test1', 'test2'] })
              resolve(true)
            }, 2000)
          } catch (er: any) {
            reject(er.message)
          }
        })
      }
    }
  })
}

export default RootModel
