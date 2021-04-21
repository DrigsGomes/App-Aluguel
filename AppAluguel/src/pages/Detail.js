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
         <Text style={styles.house}>Casa de praia</Text>
       </View>

       <View style={{width:'35%'}}>
         <Text style={styles.avali}>Avaliações</Text>
         
         <View style={{alignItems:'center', flexDirection:'row'}}>
           <Stars
           default={4}
           count={5}
           half={true}
           starSize={20}
           fullStar={ <Ionicons name="md-star" size={24} style={styles.myStar}/> }
           emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStar}/> }
           halfStart={ <Ionicons name="md-star-half" size={24} style={styles.myStar}/> }
           />
         </View>
       </View>
     </View>

     <Text style={styles.price}>
       R$ 1.200,80
     </Text>

     <Text style={styles.description}>
       Casa nova a beira do mar, lugar monitorado 24horas.
     </Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop:30}}>
       <View style={styles.slide}>
         <Image
         source={require('../assests/House4.jpeg')}
         style={{width:95, height:95, borderRadius:9}}
         />
       </View>

       <View style={styles.slide}>
         <Image
         source={require('../assests/House6.jpeg')}
         style={{width:95, height:95, borderRadius:8}}
         />
       </View>

       <View style={styles.slide}>
         <Image
         source={require('../assests/House2.jpg')}
         style={{width:95, height:95, borderRadius:9}}
         />
       </View>

     </ScrollView>
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
  },

  house:{
    fontFamily:'Montserrat_700Bold',
    fontSize: 18,
    color:'#4f4a4a'
  },

  avali:{
    fontFamily:'Montserrat_500Medium',
    fontSize:9,
    color:'#4f4a4a',
  },

  myStar:{
    color:'#e7a74e',
    backgroundColor: 'transparent',
    textShadowColor:'#000',
    textShadowOffset: { width:1, height:1},
    textShadowRadius: 1,
  },
  price:{
    paddingHorizontal:20,
    fontFamily:'Montserrat_700Bold',
    fontSize:16,
    color:'#000',
  },

  description:{
    paddingHorizontal:20,
    fontFamily:'Montserrat_500Medium',
    color:'#b3aeae',
    fontSize:14,
    lineHeight:20,
    marginTop:20,
  },

  slide:{
    alignItems:'center',
    justifyContent:'center',
    height:95,
    width:95,
    borderRadius:9,
    marginRight:20,
  },

});