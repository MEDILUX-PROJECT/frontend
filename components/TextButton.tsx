import {Text, TouchableOpacity} from 'react-native';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import React from 'react';
import {Typography} from './Typography';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

type TextButtonProps = {
  title: string;
  type: {backgroundColor: string, color: string},
  fontSize?: number,
  style?: StyleProp<ViewStyle>|undefined,
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const TextButton = ({ title, type, style, fontSize = 18, onPress = undefined}: TextButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[
      {
        backgroundColor: type.backgroundColor,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      style
    ]}>
      <Typography style={{ color: type.color, fontSize: fontSize }} >{title}</Typography>
    </TouchableOpacity>
  )
}