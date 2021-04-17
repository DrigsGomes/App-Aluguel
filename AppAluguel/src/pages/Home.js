import React from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import New from '../components/New';
import House from '../components/House';
import Recomend from '../components/Recomend';

export default function Home(){

  const navigation = useNavigation();
  return(
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    style={{backgroundColor:"#fff"}}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000"/>
          <TextInput
          placeholder="O que está procurando?"
          style={styles.input}
          />

        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
        <New
        cover={require('../assests/House1.jpg')}
        name='Casa de praia'
        description="Linda casa de praia, lugar seguro e monitorado."
        onPress={() => navigation.navigate('detail')}
        />

      <New
        cover={require('../assests/House2.jpg')}
        name='Casa de Lual'
        description="Linda casa de praia, lugar seguro e monitorado."
        onPress={() => {}}
        />
      <New
        cover={require('../assests/House3.jpeg')}
        name='Casa com piscina'
        description="Linda casa de praia, lugar seguro e monitorado."
        onPress={() => {}}
        />

      </ScrollView>

     <View style={{flexDirection:"row", marginBottom:10, alignItems:"center"}}>
       <Text style={[styles.title, {marginTop:20} ]}> Próximo de você </Text>
     </View>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
      
     <House
       cover={require('../assests/House4.jpeg')}
       />

       <House
       cover={require('../assests/House5.jpeg')}
       />

      <House
       cover={require('../assests/House6.jpeg')}
       />

     </ScrollView>

     <Text style={[styles.title, {marginTop:20} ]}> Dica do dia </Text>

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>

       <Recomend
       cover={require('../assests/House1.jpg')}
       house='Rancho em Maceió'
       offter='30%'
       />

      <Recomend
       cover={require('../assests/House4.jpeg')}
       house='Casa com piscina'
       offter='20%'
       />

      <Recomend
       cover={require('../assests/House2.jpg')}
       house='Casa para lual'
       offter='15%'
       />

     </ScrollView>


    </ScrollView>



  )
};

const styles = StyleSheet.create({
  header:{
    fontFamily:'Montserrat_700Bold',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%', 
    marginVertical:20,
  },

  inputArea:{
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    width:'98%',
    backgroundColor:"#fff",
    elevation: 2,
    height: 40,
    borderRadius:10,
  },

  input:{
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal:10,
    fontSize:15,
    width:'98%',

  },

  contentNew:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
  },

  title:{
    paddingHorizontal:15,
    fontFamily: 'Montserrat_700Bold',
    fontSize:18,
    color:'#4f4a4a'
  }

});