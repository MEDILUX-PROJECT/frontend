import {StyleSheet, View} from 'react-native';
import {Typography} from '../../components/Typography';
import {Color} from '../../assets/StyleConstants';

export type ChatBubbleProps = {
  type: number,
  content: string,
}

export const MessageType = {
  ME: 0,
  OTHER: 1,
}

export const ChatBubble = ({ type, content }: ChatBubbleProps) => {
  return (
    <View>
      <View style={[{alignItems: type === MessageType.ME ? 'flex-end' : 'flex-start'}]}>
        <Typography style={[{ fontSize: 14 }, type === MessageType.ME ? style.me : style.other]}>{content}</Typography>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  other: {
    backgroundColor: "#FFF",
    color: "#000",
    maxWidth: "60%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  me: {
    backgroundColor: Color.MAIN100,
    color: "#FFF",
    maxWidth: "60%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
  }

})