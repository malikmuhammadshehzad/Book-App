import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { FONTS } from '../../assets';
import { ICONS } from '../../assets/icons';
 
const MyButton = ({bgColor, Label, textColor, Press , width=200 ,fontSize=16 , height=45 }) => {
  return (
      <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 40,
        alignItems: 'center',
        height:height,
        width: width,
        padding:12,
       justifyContent:'center',
       flexDirection:'row',
  
      }}>
      <Text style={{color: textColor, fontSize: fontSize,  fontFamily:FONTS.poppinsMedium , marginRight:12}}>
        {Label}
      </Text>
      <ICONS.ExternalLinkIcon/>
    </TouchableOpacity>
  )
}

export default MyButton