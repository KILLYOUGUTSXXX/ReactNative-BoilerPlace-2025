/* eslint-disable @typescript-eslint/no-explicit-any */
import { IConversationData } from '@/interfaces/operation/chat.iface'
import { IModelDefinitions } from '@lynx-state'

export type IStateConversation = {
  listConversations: Array<IConversationData>
  selectedConversations: Array<string>
  currentConversation?: IConversationData
}

export type IActionConversation = {
  onLoadConversations: () => void
  onSelectConversations: (conversation_id: string) => void
  updateState: (payload: Partial<IStateConversation>) => void
}

const ConversationModel: IModelDefinitions<
  IStateConversation,
  IActionConversation
> = {
  name: 'conversation',
  subscriptions:
    (_, useActions) =>
    ({ route }) => {
      if (route.name === 'Conversation') {
        useActions('conversation')('onLoadConversations', [], true)
      }
    },
  model: (put, getStates) => ({
    state: {
      listConversations: [],
      selectedConversations: [],
      currentConversation: undefined
    },
    actions: {
      onLoadConversations() {
        return new Promise((resolve, reject) => {
          try {
            return setTimeout(() => {
              const datas = require('@/asset-datas/list-conversation.json')
              put({ listConversations: datas })
              resolve(true)
            }, 2000)
          } catch (er: any) {
            reject(er.message)
          }
        })
      },
      onSelectConversations(id) {
        try {
          let selectConversations: IStateConversation['selectedConversations'] =
            getStates('conversation', state => state.selectedConversations)

          const index = selectConversations.indexOf(id)
          if (index === -1) selectConversations.push(id)
          else selectConversations.splice(index, 1)

          put({ selectedConversations: selectConversations })
        } catch (er: any) {
          throw er.message
        }
      },
      updateState(payload) {
        put({ ...payload })
      }
    }
  })
}

export default ConversationModel
