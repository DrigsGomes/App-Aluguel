import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';

export default function Detail() {
 return (
   <View style={styles.container}>

     <View style={styles.content}>

     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
  },

  content:{
    flexDirection:'row',
    height:340,
    height:'100%',
  },



});