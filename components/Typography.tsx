import {Text} from 'react-native';
import type * as React from 'react';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type TypographyProps = {
  children?: React.ReactNode | undefined;
  style?: StyleProp<TextStyle>|undefined,
}

export const Typography = ({ children, style = {}} : TypographyProps) => {
  return (
    <Text style={[
      {
        fontFamily: 'Pretendard-Regular',
      },
      style
    ]}>
      {children}
    </Text>
  )
}