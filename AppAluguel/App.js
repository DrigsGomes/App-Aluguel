import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {AppLoading} from 'expo';
import {useFonts, Montserrat_400Regular, Montserrat_500Medium, 
  Montserrat_700Bold} from '@expo-google-fonts/montserrat';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }


 return (
   <View style={styles.container}>
     <Text style={styles.title} > Test </Text>
   </View>
  );
}; 

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor: '#155344',
    justifyContent: 'center',
    alignItems:'center',
  },
  title:{
    fontSize:25,
    color: '#323617'
  }
})