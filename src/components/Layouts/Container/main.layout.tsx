import { StyleSheet, View } from 'react-native'
// import Animated from 'react-native-reanimated'
import _styles from './style.scss'
import { ContainerProps, ContainerType } from './type'
import Animated from 'react-native-reanimated'

export default function Container(_props: ContainerProps) {
  const { animated, animateDuration, animateState, children, style, ...props } =
    _props

  if (animated) {
    return (
      <Animated.View
        {...props}
        style={[
          styles.container,
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
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles: Partial<ContainerType> = StyleSheet.create(_styles)
