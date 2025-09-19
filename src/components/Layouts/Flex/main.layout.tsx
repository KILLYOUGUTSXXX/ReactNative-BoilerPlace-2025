import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import _styles from './style.scss'
import { FlexProps, FlexType } from './type'
import Animated from 'react-native-reanimated'

export default function Flex(_props: FlexProps) {
  const { animated, animateDuration, animateState, children, style, ...props } =
    _props

  const isVertical = props.isVertical ? styles.vertical : {}
  const layoutStyles: Partial<StyleProp<ViewStyle>> = {
    justifyContent: props.justify,
    alignItems: props.align,
    rowGap: props.gap || props.rowGap,
    columnGap: props.gap || props.columnGap
  }

  if (animated) {
    return (
      <Animated.View
        {...props}
        style={[
          styles.container,
          isVertical,
          layoutStyles,
          style,
          { transitionDuration: animateDuration || 300 },
          animateState ? animated[animateState] : undefined
        ]}
      >
        {children}
      </Animated.View>
    )
  }

  return (
    <View style={[styles.container, isVertical, layoutStyles, style]}>
      {children}
    </View>
  )
}

const styles: Partial<FlexType> = StyleSheet.create(_styles)
