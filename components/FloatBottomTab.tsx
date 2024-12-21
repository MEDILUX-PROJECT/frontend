import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import {Color} from '../assets/StyleConstants';
import React from 'react';

export const FloatBottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {

  return (
    <View style={{
      position: 'absolute',
      bottom: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 100,
      paddingVertical: 15,
      paddingHorizontal: 40,
      backgroundColor: '#FFF',
      borderRadius: 60,
      boxShadow: "0px 4px 15px #00000010",
      gap: 60,
    }}>
      {state.routes.map((route, idx) => {
        const isFocused = state.index === idx;

        const { options } = descriptors[route.key];
        const icon = options.tabBarIcon !== undefined && options.tabBarIcon({focused: false, color: isFocused ? Color.MAIN100 : Color.B200, size: 24});

        const clickTabItem = () => {
          const e = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !e.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        }

        return (
          <TouchableOpacity
            key={idx}
            onPress={clickTabItem}
            hitSlop={20}
          >
            {icon}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}