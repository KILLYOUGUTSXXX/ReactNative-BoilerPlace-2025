import { EnsureStyleType } from '@/interfaces/global.iface'
import { IConversationData } from '@/interfaces/operation/chat.iface'

export interface ConversationProps {
  loadings: boolean
  data: IConversationData
  selectedItems?: Array<string>
  isMultiSelect?: boolean
  onSelectItem: (record: IConversationData) => void
  onMultiSelectItem: (record: IConversationData) => void
}

type ListConversationStyle =
  | 'wrapper-item'
  | 'item'
  | 'picture'
  | 'name'
  | 'last-chat'
  | 'updated-at'
  | 'badge'
  | 'wrapper-description'
  | 'wrapper-text'
  | 'wrapper-picture'
  | 'animWrapper'
  | 'animWrapperSelect'
  | 'animText'
export interface ConversationStyle
  extends EnsureStyleType<ListConversationStyle> {}
