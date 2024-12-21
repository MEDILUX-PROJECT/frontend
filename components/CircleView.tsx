import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type CircleViewProps = {
  children?: React.ReactNode|undefined;
  style?: StyleProp<ViewStyle>|undefined,
}

export const CircleView = ({ children, style }: CircleViewProps) => {
  return (
    <View style={[
      {
        borderWidth: 1,
        borderColor: '#C6C8C7',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }, style
    ]}>
      {children}
    </View>
  )
}