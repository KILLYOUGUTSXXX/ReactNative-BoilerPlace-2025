import { View, StyleSheet, Text } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'
import { CardActionSliceProps, SlideActionCardType } from './type'
import _styles from './style.scss'
import { useEffect, useState } from 'react'

export function SlideActionCard({
  children,
  onAction,
  nativeScrollGesture
}: CardActionSliceProps) {
  const translateX = useSharedValue(0)
  const [isEnabled, setIsEnabled] = useState<boolean>(true)

  const panGesture = Gesture.Pan()
    .onStart(event => {})
    .onChange(event => {
      // Update the shared values as the user drags
      if (event.translationX > 0) translateX.value = 0
      else translateX.value = event.translationX
    })
    .onEnd(event => {
      if (event.translationX >= -100 && event.translationX < -20)
        translateX.value = withSpring(-100)
      else if (event.translationX < -100) translateX.value = -100
      else translateX.value = withSpring(0)
    })

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }]
    }
  })

  return (
    <View style={styles.cardContainer}>
      {/* Action buttons (hidden by default) */}
      <View
        style={[
          styles.actionButtons,
          translateX.value < 0 ? styles.cardSlided : {}
        ]}
      >
        <Text style={styles.actionText} onPress={onAction}>
          Delete
        </Text>
      </View>

      {/* The sliding card content */}
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[styles.card, cardStyle]}
          // onTouchMove={event => console.log(event.currentTarget.focus())}
          onTouchEnd={() => setIsEnabled(true)}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

const styles: Partial<SlideActionCardType> = StyleSheet.create(_styles)

export default SlideActionCard
