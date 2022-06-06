import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, icons, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const CustomButton = ({
  label,
  onPress,
  containerStyle,
  textStyle,
  iconRight,
  iconLeft,
  icon
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.root, {...containerStyle}]}>
       {iconLeft && (
        <Image
          source={icon}
          resizeMode={'contain'}
          style={styles.appointmentIcon}
        />
      )}
      <Text style={[styles.label, {...textStyle}]}>{label}</Text>
      {iconRight && (
        <Image
          source={icons.arrw_right}
          resizeMode={'contain'}
          style={styles.buttonIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.06,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
  },
  label: {
    color: COLORS.white,
    ...FONTS.body8,
  },
  buttonIcon: {
    width: SIZES.font10,
    height: SIZES.font10,
    marginLeft: SIZES.font10 - 5,
  },
  appointmentIcon:{
    width: SIZES.font8,
    height: SIZES.font8,
    marginRight: SIZES.font10 - 5,
  }
});
