'use client'

import { useLynxModel } from '@lynx-state'
import { PropsWithChildren } from 'react'
import ChatLayout from './main.layout'

export default function (props: PropsWithChildren): React.JSX.Element {
  return useLynxModel(
    () => <ChatLayout {...props} />,
    () => [require('@/models/operation/conversation.model')]
  )
}
