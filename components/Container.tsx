import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import {Color} from '../assets/StyleConstants';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type ContainerProps = {
  style?: StyleProp<ViewStyle>|undefined,
  children?: React.ReactNode|undefined,
}

export const Container = ({ children, style }: ContainerProps) => {
  return (
    <SafeAreaView style={[
      {
        flex: 1,
        backgroundColor: Color.BACKGROUND,
        paddingVertical: 10,
        paddingHorizontal: 18,
      },
      style
    ]}>
      {children}
    </SafeAreaView>
  )
}