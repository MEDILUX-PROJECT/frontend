import {Text, TouchableOpacity} from 'react-native';
import {Color, Font} from 'assets/StyleConfig.tsx';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {Typography} from 'component/Typography.tsx';

type TextButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>|undefined,
}

export const TextButton = ({ title, style }: TextButtonProps) => {
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
      <Typography color='#FFF' fontSize={Font.BODY5} >{title}</Typography>
    </TouchableOpacity>
  )
}