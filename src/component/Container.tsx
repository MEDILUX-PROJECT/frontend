import React from 'react';
import {View} from 'react-native';
import {Color} from 'assets/StyleConfig.tsx';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type ContainerProps = {
  style?: StyleProp<ViewStyle>|undefined,
  children?: React.ReactNode|undefined,
}

export const Container = ({ children, style }: ContainerProps) => {
  return (
    <View style={[
      {
        flex: 1,
        backgroundColor: Color.BACKGROUND,
        paddingLeft: 18,
        paddingRight: 18,
      },
      style
    ]}>
      {children}
    </View>
  )
}