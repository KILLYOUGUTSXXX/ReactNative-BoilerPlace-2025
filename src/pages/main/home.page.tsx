import { lazy } from 'react'

const HomeView = lazy(() => import('@/views/home/index.layout'))

export default function MainPage() {
  return <HomeView />
}
