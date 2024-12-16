import React from 'react';
import {View} from 'react-native';
import {Color} from 'assets/StyleConfig.tsx';

export const CircleView = ({ children }: React.PropsWithChildren) => {
  return (
    <View style={{
      width: 92,
      height: 92,
      borderWidth: 1,
      borderColor: '#C6C8C7',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {children}
    </View>
  )
}