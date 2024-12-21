import { StatusBar } from 'expo-status-bar';
import {createStaticNavigation, NavigationContainer, useLinkBuilder} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/home/HomeScreen';
import CallScreen from './screen/call/CallScreen';
import React, {useEffect} from 'react';
import ChatScreen from './screen/chat/ChatScreen';
import {Color} from './assets/StyleConstants';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {HomeIcon, ReportIcon} from './assets/SvgIcon';
import { PlatformPressable } from '@react-navigation/elements';
import {BottomTabBarButtonProps, BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Typography} from './components/Typography';
import ReportScreen from './screen/report/ReportScreen';
import {FloatBottomTab} from './components/FloatBottomTab';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const FloatingBottomTabNavigation = () => {
    return (
      <Tab.Navigator
        tabBar={(props) => <FloatBottomTab {...props} />}
        screenOptions={{
            tabBarShowLabel: true,
            tabBarActiveTintColor: Color.MAIN100, // 활성화된 탭 색상
            tabBarInactiveTintColor: Color.B200, // 비활성화된 탭 색상
        }}
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
          headerShown: false,
          tabBarIcon: (props: {focused: boolean, color: string, size: number}) => (
            <>
              <HomeIcon width={props.size} height={props.size} color={props.color} />
              <Typography style={{ fontSize: 11, fontWeight: 'semibold', color: props.color, marginTop: 3, textAlign: 'center' }}>홈</Typography>
            </>
          )
        }}/>
        <Tab.Screen
          name="기록"
          component={ReportScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props: {focused: boolean, color: string, size: number}) => (
              <>
                <ReportIcon width={props.size} height={props.size} color={props.color} />
                <Typography style={{ fontSize: 11, fontWeight: 'semibold', color: props.color, marginTop: 4, textAlign: 'center'}}>기록</Typography>
              </>
            )
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Call"
                           screenOptions={{
                             headerShadowVisible: false,
                             headerTitleAlign: 'center',
                             headerStyle: {backgroundColor: Color.BACKGROUND},
                             headerTitleStyle: { }
                           }}>
            <Stack.Screen name="Home" component={FloatingBottomTabNavigation} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Call" component={CallScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ headerTitle: '모아', animation: 'slide_from_right' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}