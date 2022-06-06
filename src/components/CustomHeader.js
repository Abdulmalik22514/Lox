import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native'
import {ArrowLeftIcon} from '../assets/svgs/svg';

const CustomHeader = () => {

  const navigation= useNavigation()


  return (
    <Pressable onPress={() => navigation.goBack()}>
      <ArrowLeftIcon />
    </Pressable>
  );
};

export default CustomHeader;
