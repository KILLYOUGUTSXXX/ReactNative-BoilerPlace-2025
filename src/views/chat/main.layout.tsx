import Container from '@/components/Layouts/Container/main.layout'
import Flex from '@/components/Layouts/Flex/main.layout'
import Text from '@/components/Typographies/Text/main.layout'
import { StandartViewLayoutProps } from '@/interfaces/global.iface'
import {
  IActionConversation,
  IStateConversation
} from '@/models/operation/conversation.model'
import { useLynxStore } from '@lynx-state'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import _styles from './style.scss'
import { ChatStyle } from './type'
import { useEffect, useState } from 'react'
import moment from 'moment'

export default function ChatLayout(props: StandartViewLayoutProps) {
  const { state, useActions, isLoading } = useLynxStore<
    IStateConversation,
    IActionConversation
  >('conversation')
  const [loaded, setLoaded] = useState<boolean>(false)
  const goBack = () => {
    props.navigation?.goBack()
  }

  useEffect(() => {
    setLoaded(false)
    setTimeout(() => {
      setLoaded(true)
    }, 200)
  }, [])
  return (
    <Flex isVertical justify="space-between" style={styles.container}>
      <Flex justify="space-between" align="center" style={styles.mainHeader}>
        <Flex gap={12} align="center" style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Text
              style={[styles.headerContent, styles.goBack]}
              textType="title"
            >
              {'<'}
            </Text>
          </TouchableOpacity>
          <Flex isVertical>
            <Text textType="title" style={styles.headerContent}>
              {state.currentConversation?.customer_name}
            </Text>
            <Text textType="normal" style={styles.headerContent}>
              Last chat,{' '}
              {moment(
                (state.currentConversation?.last_updated_time || 0) * 1000
              ).format('DD MMM YY HH:mm')}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justify="flex-end"
          style={styles.pictureWrapper}
          animateState={loaded ? 'show' : undefined}
          animated={{
            show: {
              transform: [{ scale: 1 }]
            }
          }}
        >
          <Image
            source={{ uri: state.currentConversation?.avatar_url }}
            style={styles.picture}
          />
        </Flex>
      </Flex>

      <Container style={styles.chatContent}>
        <Text>{JSON.stringify(state.currentConversation, null, 2)}</Text>
      </Container>

      <Flex style={styles.chatBox}>
        <Text>Text Box</Text>
      </Flex>
    </Flex>
  )
}

const styles: Partial<ChatStyle> = StyleSheet.create(_styles)
