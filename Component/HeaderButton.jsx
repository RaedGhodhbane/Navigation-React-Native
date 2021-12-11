import React from 'react'
import {Ionicons} from '@expo/vector-icons';
{/* <AntDesign name="heart" size={24} color="black" /> */}
import {HeaderButton} from 'react-navigation-header-buttons'
import { Platform } from 'react-native';
import colors from '../Global/colors';

const CustomHeaderButton = props => {
    return (
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        // color={Platform.OS === 'android' ? 'white' : Colors.primary}
        color={colors.red}
      />
    );
  }
  export default CustomHeaderButton
