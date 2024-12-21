import {Container} from '../../components/Container';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetView} from '@gorhom/bottom-sheet';
import {Typography} from '../../components/Typography';
import {ChatBubble, ChatBubbleProps, MessageType} from './ChatBubble';
import {TextButton} from '../../components/TextButton';
import {ButtonStyle, Color} from '../../assets/StyleConstants';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {useNavigation} from '@react-navigation/native';

function ChatScreen() {
  const navigation = useNavigation();

  const [userName, setUserName] = useState<string>('');

  const [messageList, setMessageList] = useState<ChatBubbleProps[]>([
    {
      type: MessageType.OTHER,
      content: '안녕하세요! 저는 모아에요. 처음 뵙는데 이름을 알려주실래요?'
    }
  ]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%'], []);

  useEffect(() => {
    setTimeout(() => bottomSheetModalRef.current?.present(), 2000);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const clickNameEnter = (e: GestureResponderEvent) => {
    bottomSheetModalRef.current?.close();
    setMessageList(prev => [...prev, {
      type: MessageType.ME,
      content: userName,
    }]);

    setTimeout(() => {
      setMessageList(prev => [...prev, {
        type: MessageType.OTHER,
        content: `이제 ${userName}님에 대해 조금 더 알게 된 것 같아요. 언제든 편하게 이야기해 주세요.`,
      }]);

      setTimeout(() => {
        // @ts-ignore
        navigation.navigate('Home');
      }, 2000);
    }, 500);
  }

  return (
    <Container>
      <View>
        {
          messageList.map((item: ChatBubbleProps, idx) => (
            <ChatBubble key={idx} type={item.type} content={item.content} />
          ))
        }
      </View>

        {/*<Button*/}
        {/*  onPress={handlePresentModalPress}*/}
        {/*  title="Present Modal"*/}
        {/*  color="black"*/}
        {/*/>*/}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          enablePanDownToClose={false}
          snapPoints={snapPoints}
          backdropComponent={(backdropProps) => <BottomSheetBackdrop {...backdropProps} enableTouchThrough={false} appearsOnIndex={0} disappearsOnIndex={-1} pressBehavior={'collapse'} /> }
        >
          <BottomSheetView style={{ flex: 1, paddingHorizontal: 14, paddingVertical: 20 }}>
            <Typography style={{ fontSize: 18, fontWeight: 'semibold' }}>모아이스에서 어떤 이름으로 불리고 싶나요?</Typography>

            <View style={{ marginVertical: 30 }}>
              <Typography style={{ color: Color.B400, fontSize: 12, fontWeight: 'medium' }}>이름 입력</Typography>
              <TextInput
                autoFocus
                value={userName} onChangeText={setUserName}
                placeholder="이름을 입력해주세요" placeholderTextColor={Color.B200}
                style={{ borderBottomWidth: 1, borderBottomColor: Color.B400, fontFamily: 'Pretendard-Regular', fontSize: 16, marginTop: 20 }}/>
            </View>

            <TextButton title="완료" type={ButtonStyle.TYPE1} style={{ height: 53 }} onPress={clickNameEnter}/>
          </BottomSheetView>
        </BottomSheetModal>
    </Container>
  )
}

export default ChatScreen;