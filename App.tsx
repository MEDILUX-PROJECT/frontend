import React, {useCallback, useRef} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ChatPage from 'page/chat/ChatPage.tsx';
import {Color} from 'assets/StyleConfig.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetModal, BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import {MainPage} from 'page/main/MainPage.tsx';
import CallPage from 'page/call/CallPage.tsx';

const Stack = createNativeStackNavigator();

function App()  {

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handleSheetChange = useCallback((index: number) => {

    console.log('handleSheetChanges', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="call"
                       screenOptions={{
                         headerTitleAlign: 'center',
                         headerShadowVisible: false,
                         headerStyle: {
                           backgroundColor: Color.BACKGROUND,
                         },
                         headerTitleStyle: {
                           fontSize: 18
                         }
                       }}>
        <Stack.Screen name="call" component={CallPage} options={{headerShown: false}} />
        <Stack.Screen name="chat" component={ChatPage} options={{title: "모아"}} />
        <Stack.Screen name="main" component={MainPage} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
