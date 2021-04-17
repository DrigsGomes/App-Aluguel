import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

export default function New (props) {
 return (
     <TouchableOpacity onPress={props.onPress} style={styles.container}>
         
         <Image
         source={props.cover}
         style={styles.cover}
         />

         <View style={styles.content}>
             <Text style={styles.tile}>{props.name}</Text>
             <View style={styles.circle}></View>

             <Text style={styles.bedge}>Novo</Text> 
         </View>

         
        <Text style={styles.desc}>{props.description}</Text>

        <View style={styles.footer}>
            <View style={{width:"80%"}}>
                <Text style={styles.price}>R$ 1.287,00</Text>
            </View>

            <View style={{width:"20%"}}>
                <Ionicons name="ios-add-circle" size={24} backgroundColor="#000"/>
            </View>

        </View>
         

     </TouchableOpacity>
  
  );
}

const styles = StyleSheet.create ({

    container:{
        backgroundColor:'#fff',
        height:250,
        width:200,
        elevation:3,
        borderRadius:10,
        padding:15,
        marginRight:30,
        marginLeft:2,
        marginBottom:5,   
        marginTop:10  
    },

    cover:{
        width:170,
        height:110,
        borderRadius:10,
    },

    content:{
        flexDirection: 'row',
        alignItems:'center',
        marginTop:8,

    },

    title:{
        fontFamily:'Montserrat_700Bold',
        fontSize:12,
        color:'#4f4a4a',
    },

    circle:{
        width:4,
        height:4,
        borderRadius:4,
        backgroundColor: 'red',
        marginHorizontal: 4,
    },

    bedge:{
        fontSize:10,
        fontFamily:'Montserrat_700Bold',
        color:'red',
    },

    desc:{
        fontFamily:'Montserrat_400Regular',
        fontSize:10,
        color:'#4f4a4a',
    },

    footer:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:'100%',
        },

    price:{
        fontSize:16,
        fontFamily:'Montserrat_700Bold',
    },
 

});