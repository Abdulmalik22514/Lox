import { Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const TabComponent = ({focused, label, icon}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={icon}
        resizeMode={'contain'}
        style={{
          width: SIZES.font1 - 10,
          height: SIZES.font1 - 10,
          tintColor: focused ? COLORS.primary : COLORS.secondary,
        }}
      />

      <Text
        style={{
          ...FONTS.body10,
          color: focused ? COLORS.primary : COLORS.secondary,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default TabComponent;
