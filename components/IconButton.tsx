import {Image, Text, TouchableOpacity} from 'react-native';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type * as React from 'react';

type IconButtonProps = {
  children?: React.ReactNode|undefined;
  style?: StyleProp<ViewStyle>|undefined,
  type: {backgroundColor: string, color: string},
}

export const IconButton = ({ children, style, type }: IconButtonProps) => {
  return (
    <TouchableOpacity style={[
      {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: type.backgroundColor,
      },
      style
    ]}>
      {children}
    </TouchableOpacity>
  )
}