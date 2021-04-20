import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';

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
           default={4}
           count={5}
           half={true}
           starSize={20}
           fullStart={ <Ionicons name="md-star" size={24} style={styles.myStar}/> }
           emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStar}/> }
           halfStart={ <Ionicons name="md-star-half" size={24} style={styles.myStar}/> }
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

  headerContent:{
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    marginTop:20,
  }



});