import { EnsureStyleType } from '@/interfaces/global.iface'

export interface CardActionSliceProps {
  onAction: (record: any) => void
  children: React.ReactNode
  nativeScrollGesture: any
}

type ListSlideActionCardType =
  | 'cardContainer'
  | 'card'
  | 'actionButtons'
  | 'actionText'
  | 'cardSlided'
export interface SlideActionCardType
  extends EnsureStyleType<ListSlideActionCardType> {}
