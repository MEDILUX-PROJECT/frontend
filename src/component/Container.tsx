import React from 'react';
import {View} from 'react-native';
import {Color} from 'assets/StyleConfig.tsx';

export const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: Color.BACKGROUND,
      paddingLeft: 18,
      paddingRight: 18,
    }}>
      {children}
    </View>
  )
}