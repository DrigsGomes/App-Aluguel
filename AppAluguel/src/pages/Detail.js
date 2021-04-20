import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import {Stars} from 'react-native-stars';

import SwiperComponent from '../components/Swiper';

export default function Detail() {
 return (
   <View style={styles.container}>

     <View style={styles.swiperContent}>
       <SwiperComponent/>
     </View>

     <View style={styles.headerContent}>

       <View style={{width:'65%'}}>
         <Text>Casa de praia</Text>
       </View>

       <View style={{width:'35%'}}>
         <Text style={styles.avali}>Avaliações</Text>
         
         <View style={{alignItems:'center', flexDirection:'row'}}>
           <Stars
           

           />
         </View>
       </View>


     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
  },

  swiperContent:{
    flexDirection:'row',
    height:340,
    width:'100%',
  },



});