import {Container} from 'component/Container.tsx';
import {Image, View, Animated, Vibration, PanResponder, Platform, TouchableOpacity} from 'react-native';
import {CircleView} from 'component/CircleView.tsx';
import {Typography} from 'component/Typography.tsx';
import React, {LegacyRef, useEffect, useRef, useState} from 'react';
import {LayoutChangeEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {Font} from 'assets/StyleConfig.tsx';
import {PanResponderGestureState} from 'react-native/Libraries/Interaction/PanResponder';
import {useNavigation} from '@react-navigation/native';

function CallPage() {
  const navigation = useNavigation();

  const distance = useRef(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const chevronColorAnim = useRef(new Animated.Value(0)).current;

  const [isDrag, setDrag] = useState(false);
  const [isCall, setCall] = useState(false);

  useEffect(() => {
    shimmer();
    Vibration.vibrate([2000, 1000], true);
  }, []);

  useEffect(() => {
    if (isCall) {
      Vibration.cancel();
      setTimeout(() => {
        // @ts-ignore
        navigation.navigate('chat');
      }, 3000);
    }
  }, [isCall]);

  const shimmer = () => {
    Animated.timing(chevronColorAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      chevronColorAnim.setValue(0);
      shimmer();
    })
  }

  const onLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    distance.current = width - 75 - 24; // todo
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        setDrag(true);
        return true;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(0);
        }
        else if (gestureState.dx > distance.current) {
          translateX.setValue(distance.current);
        }
        else {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState: PanResponderGestureState) => {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: false,
        }).start();

        setCall(gestureState.dx >= distance.current);
        setDrag(false);
      }
    })
  ).current;

  return (
    <Container style={{ alignItems: 'center', justifyContent: isCall ? 'center' : 'flex-start'}}>
      <View style={{ alignItems: 'center', marginTop: isCall ? 0 : 158 }}>
        <CircleView style={{ width: 155, height: 155, marginBottom: 41, backgroundColor: '#FFF' }}>
          <Image
            source={require('../../assets/image/logo_icon1.png')}
            style={{width: 52.23, height: 80.87}}
          />
        </CircleView>
        <Typography bold="bold" fontSize={30} style={{ textAlign: 'center'}}>{isCall ? '전화 거는 중...' : '모아'}</Typography>
      </View>

      <View style={{ display: isCall ? 'none' : 'flex' }}>
        <View onLayout={onLayout}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 322, height: 87,
                borderRadius: 57.5,
                backgroundColor: '#F2F0E2',
                marginTop: 157,
                marginBottom: 36,
              }}>
          <Animated.View style={[ {transform: [{ translateX }]} ]} {...panResponder.panHandlers}>
            <CircleView style={{width: 75, height: 75, backgroundColor: '#FFF', borderColor: '#FFF', marginLeft: 12 }}>
              <Image source={require('../../assets/icon/icon_call_green.png')}/>
            </CircleView>
          </Animated.View>
          <Typography fontSize={Font.HEAD2} bold='semibold' style={{ display: isDrag ? 'none' : 'flex', marginLeft: 48 }}>밀어서 통화하기</Typography>
        </View>

        {/* todo 나중에 통화하기 기능 추가 */}
        <Typography fontSize={Font.BODY3} color='#8D9190' style={{ display: isDrag ? 'none' : 'flex', textAlign: 'center' }}>나중에 통화하기</Typography>
      </View>

    </Container>
  )
}

export default CallPage;