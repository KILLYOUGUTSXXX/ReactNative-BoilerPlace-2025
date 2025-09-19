import { EnsureStyleType } from '@/interfaces/global.iface'

type ListChatStyleType =
  | 'container'
  | 'mainHeader'
  | 'header'
  | 'chatContent'
  | 'chatBox'
  | 'sendButton'
  | 'goBack'
  | 'headerContent'
  | 'picture'
  | 'pictureWrapper'
export interface ChatStyle extends EnsureStyleType<ListChatStyleType> {}
