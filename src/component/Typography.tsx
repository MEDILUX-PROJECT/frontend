import {Text} from 'react-native';
import {Font} from 'assets/StyleConfig.tsx';
import type * as React from 'react';
import {JSX} from 'react/jsx-runtime';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type TypographyProps = {
  children?: React.ReactNode | undefined;
  fontSize?: number,
  bold?: 'bold'|'semibold'|'regular',
  color?: string,
}

export const Typography = ({ children, fontSize = Font.BODY2, bold = 'regular', color = '#000',} : TypographyProps) => {
  return (
    <Text style={{
      fontFamily: 'Pretendard',
      fontSize: fontSize,
      fontWeight: bold,
      color: color,
    }}>
      {children}
    </Text>
  )
}