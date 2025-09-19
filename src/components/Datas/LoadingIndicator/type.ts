import { EnsureStyleType } from '@/interfaces/global.iface'
import { StyleProp, ViewStyle } from 'react-native'

export type SizeLoadingType =
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
export interface LoadingProps {
  size?: SizeLoadingType
  color?: string
  style?: StyleProp<ViewStyle>
}

type ListLoadingType = 'loader'
export interface LoadingType extends EnsureStyleType<ListLoadingType> {}
