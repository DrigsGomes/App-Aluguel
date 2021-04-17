import React from 'react';
import {Touchable, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';

import Home from './pages/Home';
import Detail from './pages/Detail';


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="home"
                component={Home}
                options={{
                    title: 'ALUGUE',
                    headerBackTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                            name="shopping-bag"
                            size={24}
                            color="#000"
                            />
                
                        </TouchableOpacity>
                    )              
                }}
                 />
                <Stack.Screen 
                name="detail" 
                component={Detail}
                options={{
                    title: 'DETALHE',
                    headerBackTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                            name="shopping-bag"
                            size={24}
                            color="#000"
                            />
                
                        </TouchableOpacity>
                    )              
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export  default Routes;