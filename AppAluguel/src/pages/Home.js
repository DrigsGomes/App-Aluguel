import React from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

export default function Home(){
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

    </ScrollView>

  )
};

const styles = StyleSheet.create({
  header:{
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
    width:'98%'

  }

});