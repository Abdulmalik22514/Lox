import {StyleSheet, Text, View,Pressable} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import { FONTS } from '../constants/theme';

const SearchUser = ({item, index,onPress}) => {
  return (

    <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.icon}>
        <Text style={{color: '#fff', ...FONTS.h5, }}>S</Text>
      </View>

      <View style={styles.nameBox}>
        <Text style={{color: COLORS.black, ...FONTS.h9}}>Seun Olumide</Text>
        <Text style={{color: COLORS.grey}}>Gbagada</Text>
      </View>
      <Text style={{color: "#FF4658", ...FONTS.h8}}>$250</Text>

    </Pressable>
  );
};

export default SearchUser;

const styles = StyleSheet.create({
  root: {
    // backgroundColor: 'red',
    height: SIZES.font1 * 1.6,
    width: SIZES.width * 0.9,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"center"
  },
  icon: {
    height: '100%',
    width: SIZES.font1 * 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#242736",
    borderRadius: 10,
  },
  nameBox: {
    height: SIZES.font1 * 1.4,
    justifyContent: 'space-around',
    width: '70%',
    left:SIZES.font8

  },
});
