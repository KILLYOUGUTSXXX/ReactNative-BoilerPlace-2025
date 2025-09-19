import { StyleSheet } from 'react-native'
import _styles from './style.scss'
import { LoadingProps, LoadingType, SizeLoadingType } from './type'
import { ActivityIndicator } from 'react-native'

const _size: { [P in SizeLoadingType]: number } = {
  small: 1,
  medium: 1.5,
  large: 2,
  xlarge: 2.5,
  xxlarge: 3
}

export default function LoadingIndicator(props: LoadingProps) {
  const size = _size[props.size || 'medium']
  return (
    <ActivityIndicator
      style={[styles.loader, props.style, [{ transform: [{ scale: size }] }]]}
      size={24 * size}
      color={props.color || '#02a37d'}
    />
  )
}

const styles: Partial<LoadingType> = StyleSheet.create(_styles)
