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

});