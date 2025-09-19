import { StyleSheet, View } from 'react-native'
import _styles from './style.scss'
import { DividerProps, DividerType } from './type'

export default function Divider(props: DividerProps) {
  const isVertical = props.isVertical ? styles.vertical : {}
  return <View style={[styles.container, isVertical, props.style]} />
}

const styles: Partial<DividerType> = StyleSheet.create(_styles)
