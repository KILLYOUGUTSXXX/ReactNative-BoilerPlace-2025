import { Image, StyleSheet, View } from 'react-native'

import _styles from './style.scss'
import { ConversationProps, ConversationStyle } from './type'
import Flex from '@/components/Layouts/Flex/main.layout'
import Text from '@/components/Typographies/Text/main.layout'
import moment from 'moment'
import { IText } from '@/components/Typographies/Text/type'
import Container from '@/components/Layouts/Container/main.layout'

export default function ConversationItemLayout(props: ConversationProps) {
  let processTimeout: number | undefined = undefined
  let longTap: boolean = false

  const isSelected =
    props.selectedItems?.indexOf(props.data.conversation_id) !== -1
  const touchStart = () => {
    if (props.isMultiSelect) return props.onMultiSelectItem(props.data)

    processTimeout = setTimeout(() => {
      if (typeof processTimeout === 'number') clearTimeout(processTimeout)
      longTap = true
      return props.onMultiSelectItem(props.data)
    }, 1000)
  }
  const touchEnd = () => {
    if (props.isMultiSelect) return

    if (typeof processTimeout === 'number') {
      clearTimeout(processTimeout)
    }

    if (!longTap) props.onSelectItem(props.data)
    longTap = false
  }

  const animateTextTransition: Partial<IText> = {
    animated: {
      select: { color: 'white' }
    },
    animateState: isSelected ? 'select' : undefined
  }

  const touchMove = () => {
    longTap = true
    if (typeof processTimeout === 'number') {
      clearTimeout(processTimeout)
    }
  }

  return (
    <Container
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
      animateState={isSelected ? 'select' : undefined}
      animated={{
        select: styles.animWrapperSelect
      }}
    >
      <Flex style={styles['wrapper-item']} gap={8}>
        <View style={styles['wrapper-picture']}>
          <Image
            source={{ uri: props.data.avatar_url }}
            style={styles.picture}
          />
        </View>
        <Flex isVertical style={styles['wrapper-text']}>
          <View>
            <Text style={styles.name} {...animateTextTransition}>
              {props.data.customer_name}
            </Text>
          </View>
          <Flex
            justify="space-between"
            style={styles['wrapper-description']}
            columnGap="0.5rem"
          >
            <Text
              style={styles['last-chat']}
              numberOfLines={1}
              ellipsizeMode="tail"
              {...animateTextTransition}
            >
              {props.data.last_chat}
            </Text>
            <Text style={styles['updated-at']} {...animateTextTransition}>
              {moment(props.data.last_updated_time).format('HH:mm')}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

const styles: Partial<ConversationStyle> = StyleSheet.create(_styles)
