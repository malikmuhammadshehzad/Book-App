import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {Colors, FONTS} from '../../assets';
 
import { ICONS } from '../../assets/icons';
const InputField = props => {
  return (
    <View style={styles.mainContainer}>
      <ICONS.SearchIcon   width={18} height={16} />
      <TextInput  placeholderTextColor={Colors.black} {...props} style={styles.input}></TextInput>
    </View>
  );
};

export default InputField;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.lightGrey,
    width: 320,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    paddingHorizontal: 20
  },
  input:{
    width:'95%',
    paddingLeft: 10,
    color:Colors.black
  }
  
});
