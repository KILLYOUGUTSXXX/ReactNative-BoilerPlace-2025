import { useLynxStore } from '@lynx-state'
import { FlatList, StyleSheet, View } from 'react-native'

import _styles from './style.scss'
import { StyleHome } from './type'
import Text from '@/components/Typographies/Text/main.layout'
import Flex from '@/components/Layouts/Flex/main.layout'
import {
  IActionConversation,
  IStateConversation
} from '@/models/operation/conversation.model'
import LoadingIndicator from '@/components/Datas/LoadingIndicator/main.layout'
import ConversationItemLayout from './_layouts/conversation-item/main.layout'
import { ConversationProps } from './_layouts/conversation-item/type'
import Divider from '@/components/Layouts/Divider/main.layout'
import { useState } from 'react'
import { StandartViewLayoutProps } from '@/interfaces/global.iface'

export default function HomeLayout({ navigation }: StandartViewLayoutProps) {
  const { state, useActions, isLoading } = useLynxStore<
    IStateConversation,
    IActionConversation
  >('conversation')
  const loadings = isLoading('onLoadConversations') || false
  const [firstOn, setFirstOn] = useState<boolean>(true)
  const isMultiSelect = state.selectedConversations.length > 0

  const itemProps: Omit<ConversationProps, 'data'> = {
    loadings: false,
    isMultiSelect,
    selectedItems: state.selectedConversations,
    onMultiSelectItem(record) {
      useActions<'onSelectConversations'>('onSelectConversations', [
        record.conversation_id
      ])
      setFirstOn(false)
    },
    onSelectItem(record) {
      useActions<'updateState'>('updateState', [
        {
          currentConversation: record
        }
      ])
      navigation?.navigate('Home', { screen: 'Chat' })
    }
  }

  return (
    <Flex isVertical style={styles.container}>
      <Flex style={styles.header} align="center" justify="space-between">
        <Text textType="title" style={styles.title}>
          Whushh...
        </Text>
        {!firstOn && (
          <Text
            textType="sub-title"
            style={[styles.selectItem, { transform: [{ translateY: -40 }] }]}
            animateState={isMultiSelect ? 'on' : undefined}
            animated={{ on: { transform: [{ translateY: 0 }] } }}
          >
            {state.selectedConversations.length}
          </Text>
        )}
      </Flex>
      <Divider />
      <Flex isVertical style={[styles['conversation-wrapper']]}>
        {loadings && <LoadingIndicator />}
        {!loadings && (
          <FlatList
            data={state.listConversations}
            keyExtractor={({ conversation_id }) => conversation_id}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <ConversationItemLayout
                key={item.customer_id}
                data={item}
                {...itemProps}
              />
            )}
          />
        )}
      </Flex>
    </Flex>
  )
}

const styles: Partial<StyleHome> = StyleSheet.create(_styles)
