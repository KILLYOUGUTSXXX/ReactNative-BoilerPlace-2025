'use client'

import { useLynxModel } from '@lynx-state'
import { PropsWithChildren } from 'react'
import HomeLayout from './main.layout'

export default function (props: PropsWithChildren): React.JSX.Element {
  return useLynxModel(
    props => <HomeLayout {...props} />,
    () => [require('@/models/main/root.model')]
  )
}
