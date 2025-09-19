import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy, Suspense } from 'react'
import { Text } from 'react-native'

const Stack = createNativeStackNavigator()
const HomePage = lazy(() => import('./main/home.page'))
export default function MainPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Welcome" component={() => <Text>Welcome</Text>} />
        <Stack.Screen name="Login" component={() => <Text>Login</Text>} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
