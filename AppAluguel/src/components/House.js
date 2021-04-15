import React from 'react';
import { View, Text, StyleSheet,Image,} from 'react-native';

export default function House() {
 return (
   <View>
     <View style={styles.container}>
       <Image
       source={require('../assests/House4.jpeg')}
       style={styles.cover}
       />

     <View style={styles.content}>     
       <Text style={styles.desc}> Uma linda casa de prai localizada em Maceió</Text>

       <Text style={styles.price}> R$ 962,58</Text>

     </View>

     </View>


   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: 260,
    height: 70,
    backgroundColor:'#fff',
    elevation:2,
    padding:6,
    marginVertical:5,
    marginRight:20,
    marginLeft:2,
    borderRadius:10,
  },

  cover:{
    borderRadius:10,
    width:60,
    height:60,
  },

  content:{
    width:'60%',
    justifyContent: 'flex-end',
    paddingHorizontal:10,
    height:'100%'
  },

  desc:{
    fontSize:10,
    fontFamily: 'Montserrat_500Medium'
  },
   price:{
     fontSize:12,
     fontFamily: 'Montserrat_700Bold',
   }

});