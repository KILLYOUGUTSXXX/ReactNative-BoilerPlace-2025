import {
  NavigationProp,
  ParamListBase,
  RouteProp
} from '@react-navigation/native'
import { StyleProp } from 'react-native'

export type EnsureStyleType<T extends string> = {
  [P in T]: StyleProp<any>
}

export interface StandartViewLayoutProps {
  navigation?: {
    navigate: (routeName: string, props?: { screen: string }) => void
    goBack: () => void
    replaceParams: (routeName: string, props?: { screen: string }) => void
  }
  route?: RouteProp<ParamListBase>
  children?: React.ReactNode
}
