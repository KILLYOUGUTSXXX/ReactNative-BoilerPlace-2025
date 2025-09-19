import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { lazy } from 'react'

const ChatView = lazy(() => import('@/views/chat/index.layout'))
const HomeView = lazy(() => import('@/views/home/index.layout'))
const Stack = createNativeStackNavigator()
export default function MainPage() {
  return (
    <Stack.Navigator
      initialRouteName="Conversation"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Conversation" component={HomeView} />
      <Stack.Screen name="Chat" component={ChatView} />
    </Stack.Navigator>
  )
}
