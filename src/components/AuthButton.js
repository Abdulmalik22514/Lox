import { StyleSheet, Text,Pressable } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { FONTS } from '../constants/theme'

const AuthButton = ({label, onPress, containerStyle}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, {...containerStyle}]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

export default AuthButton

const styles = StyleSheet.create({
    root:{
        backgroundColor:COLORS.black,
        width:SIZES.width*0.9,
        height:SIZES.height*0.07,
        borderRadius:5,
        alignItems:"center",
        borderColor:COLORS.primary,
        justifyContent:"center",
    },
    label:{
        color:COLORS.white,
        ...FONTS.h8
    }

})