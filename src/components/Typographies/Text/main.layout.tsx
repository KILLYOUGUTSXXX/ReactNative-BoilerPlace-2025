import { Text as RnText, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

import _styles from './style.scss'
import type { IText, TextStyle } from './type'

export default function Text(_props: IText) {
  const {
    children,
    style,
    textType,
    animateState,
    animated,
    animateDuration,
    ...props
  } = _props

  const textTypeStyle = styles[textType || 'normal']

  if (animated) {
    return (
      <Animated.Text
        style={[
          styles.standart,
          textTypeStyle,
          ...(Array.isArray(style) ? style : [style]),
          { transitionDuration: animateDuration || 300 },
          animateState ? animated[animateState] : undefined
        ]}
      >
        {children}
      </Animated.Text>
    )
  }

  return (
    <RnText {...props} style={[styles.standart, textTypeStyle, style]}>
      {children}
    </RnText>
  )
}

const styles: Partial<TextStyle> = StyleSheet.create(_styles)
