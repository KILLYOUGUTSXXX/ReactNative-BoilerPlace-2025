import { EnsureStyleType } from '@/interfaces/global.iface'
import { StyleProp, ViewStyle } from 'react-native'

export interface DividerProps {
  isVertical?: boolean
  style?: StyleProp<ViewStyle>
}

type ListDividerType = 'container' | 'vertical'
export interface DividerType extends EnsureStyleType<ListDividerType> {}
