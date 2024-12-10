import React from 'react';
import { View, Text } from 'react-native';
import {Color} from 'assets/StyleConfig.tsx';

function App()  {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: Color.primary_background }}>
      <Text>안녕하세요.</Text>
    </View>
  );
}

export default App;
