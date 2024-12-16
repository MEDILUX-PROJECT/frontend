import {View, Text, StyleSheet, TextInput, Keyboard} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Container} from 'component/Container.tsx';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetModalProvider,
  BottomSheetProps
} from '@gorhom/bottom-sheet';

type ChatBubbleProps = {
  message: string;
  type: number;
}

function ChatPage() {
  const [bubbles, setBubbles] = useState<ChatBubbleProps[]>([]);

  const bottomSheetRef = useRef<BottomSheetModalProps>(null);
  const [bottomSheetIndex, setBottomSheetIndex] = useState<number>(-1);

  useEffect(() => {
    setBubbles([
      {
        message: "안녕하세요! 저는 모아에요. 처음 뵙는데 이름을 알려주실래요?",
        type: 0,
      }, {
        message: "김메디",
        type: 1,
      }, {
        message: "반가워요 김메디님, 오늘부터 저와 통화를 하게 되실 김메디님의 목소리가 궁금해요.",
        type: 0,
      }, {
        message: "지금부터 하는 대화는 모두 비밀이 보장되며, 대화 내용은 안전하게 보관되어 김메디님이 원하실 경우에만 다시 볼 수 있으니, 안심하고 이야기해주세요.",
        type: 0,
      }
    ]);


  }, []);

  return (
    <Container>
      {/*<TextInput placeholder="Test..." onSubmitEditing={Keyboard.dismiss} style={{width: 30, height: 30}} />*/}

      {/*<View style={{flex: 1, gap: 5}}>*/}
      {/*  {*/}
      {/*    bubbles.map((item, idx) => (*/}
      {/*      <View key={idx} style={{alignItems: item.type === 0 ? "flex-start" : "flex-end"}}>*/}
      {/*        <Text style={item.type === 0 ? styles.bubbleOther : styles.bubbleSelf}>*/}
      {/*          {item.message}*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</View>*/}


    </Container>
  )
}

const styles = StyleSheet.create({
  bubbleOther: {
    maxWidth: "60%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bubbleSelf: {
    maxWidth: '60%',
    backgroundColor: '#4FAE9B',
    color: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
})

export default ChatPage;