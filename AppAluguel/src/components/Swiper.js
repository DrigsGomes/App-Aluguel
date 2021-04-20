import React from 'react';
import { View, StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SwiperComponent () {
 return (
   <Swiper
   style={styles.wrapper}
   dotStyle={{
       backgroundColor:'#000',
       borderColor: '#000',
       borderWidth:1,
       width:10,
       height:10,
       borderRadius:10,
   }}
   
   activeDotColor='#fff'
   activeDotStyle={{
       borderColor: '#000',
       borderWidth: 1,
       width:10,
       height:10,
       borderRadius:10,
   }}
   >
       <View style={styles.slide}>
           <Image
           source={require('../assests/House1.jpg')}
           style={{width: '100%', height: 340}}
           />
       </View>

       <View style={styles.slide}>
           <Image
           source={require('../assests/House2.jpg')}
           style={{width: '100%', height: 340}}
           />
       </View>

       <View style={styles.slide}>
           <Image
           source={require('../assests/House3.jpeg')}
           style={{width: '100%', height: 340}}
           />
       </View>

   </Swiper>

  );
}

const styles = StyleSheet.create({

    wrapper:{

    },

    slide:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff'
    }

});