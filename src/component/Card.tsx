import {View} from 'react-native';
import {Color} from 'assets/StyleConfig.tsx';
import React, {ReactNode} from 'react';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type CardProps = {
  children: ReactNode,
  style?: StyleProp<ViewStyle>|undefined,
}

export const Card = ({ children, style = {} }: CardProps) => {


  return (
    <View style={[
      {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 20,
      },
      style
    ]}>
      {children}
    </View>
  )
}