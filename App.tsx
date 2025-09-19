/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import _styles from './style.scss'
import MainPage from './src/pages/root.page'

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  )
}

function AppContent() {
  return (
    <SafeAreaView
      style={{
        ...styles.container
      }}
    >
      <MainPage />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(_styles)

export default App
