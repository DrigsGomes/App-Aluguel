import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';

export default function Recomend({cover, house, offter}) {
 return (

    <ImageBackground 
    source={cover}
    style={styles.container}
    blurRadius={3}
    >
        <Text style={[styles.house, styles.shadow]}> {house}</Text>

        <Text style={[styles.desc, styles.shadow]}> {offter} OFF</Text>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({

    container:{
        height:130,
        width:230,
        marginBottom: 40,
        marginTop:10,
        marginBottom:40,
        marginLeft:3,
        opacity:0.9,
        backgroundColor:'#000',
        padding:12,
    },

    house:{
        fontFamily: 'Montserrat_700Bold',
        color:'#FFF',
        fontSize:16,
    },

    desc:{
    fontFamily: 'Montserrat_700Bold',
    color: '#FFF',
    fontSize:12,
    },

    shadow:{
        textShadowColor:'#000',
        textShadowOffset:{width:1, height:3},
        textShadowRadius:5
    }




});