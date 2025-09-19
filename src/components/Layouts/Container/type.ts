import { EnsureStyleType } from '@/interfaces/global.iface'
import { ViewProps, ViewStyle } from 'react-native'

export interface ContainerProps extends ViewProps {
  /**in milisecond, default 300 milisecond */
  animateDuration?: number
  /** register the animation */
  animated?: { [T in string]: ViewStyle }
  /** set the current state of animation, depends on list key of "animated" */
  animateState?: string
}

type ListContainerType = 'container' | 'vertical'
export interface ContainerType extends EnsureStyleType<ListContainerType> {}
