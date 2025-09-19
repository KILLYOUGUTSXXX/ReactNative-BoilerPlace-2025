import { EnsureStyleType } from '@/interfaces/global.iface'

type ListStyleType =
  | 'container'
  | 'description'
  | 'header'
  | 'conversation-wrapper'
  | 'title'
  | 'selectItem'
export interface StyleHome extends EnsureStyleType<ListStyleType> {}
