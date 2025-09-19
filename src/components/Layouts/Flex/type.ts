import { EnsureStyleType } from '@/interfaces/global.iface'
import { FlexAlignType, StyleProp, ViewStyle } from 'react-native'

export interface FlexProps {
  isVertical?: boolean
  style?: StyleProp<ViewStyle>
  justify?:
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-evenly'
  rowGap?: number | string
  columnGap?: number | string
  gap?: number | string
  align?: FlexAlignType
  children: React.ReactNode
  /**in milisecond, default 300 milisecond */
  animateDuration?: number
  /** register the animation */
  animated?: { [T in string]: ViewStyle }
  /** set the current state of animation, depends on list key of "animated" */
  animateState?: string
}

type ListFlexType = 'container' | 'vertical'
export interface FlexType extends EnsureStyleType<ListFlexType> {}
