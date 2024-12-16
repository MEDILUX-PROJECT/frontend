import {Image, Text, TouchableOpacity} from 'react-native';
import {Color, Font} from 'assets/StyleConfig.tsx';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {Typography} from 'component/Typography.tsx';
import type * as React from 'react';

type IconButtonProps = {
  children?: React.ReactNode|undefined;
  style?: StyleProp<ViewStyle>|undefined,
}

export const IconButton = ({ children, style }: IconButtonProps) => {
  return (
    <TouchableOpacity style={[
      {
        backgroundColor: Color.PRIMARY,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      style
    ]}>
      {children}
    </TouchableOpacity>
  )
}