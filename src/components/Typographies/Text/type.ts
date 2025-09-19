import { EnsureStyleType } from '@/interfaces/global.iface'
import { TextProps } from 'react-native'

type TextTypeName = 'title' | 'sub-title' | 'normal'
type TextType = TextProps & {
  children: React.ReactNode
  textType?: TextTypeName
  /**in milisecond, default 300 milisecond */
  animateDuration?: number
  /** register the animation */
  animated?: { [T in string]: TextProps['style'] }
  /** set the current state of animation, depends on list key of "animated" */
  animateState?: string
}

export interface IText extends TextType {}

export type ListStyleType = 'standart' | TextTypeName
export interface TextStyle extends EnsureStyleType<ListStyleType> {}
