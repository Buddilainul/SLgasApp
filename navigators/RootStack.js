import React from 'react';

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import Welcome from './../screens/Welcome';
import Forget_Password from './../screens/Forget_Password';
import Home from './../screens/Home';
import Notification from './../screens/Notification';
import Dashbord from './../screens/Dashbord';
import Map from './../screens/Map';
import Profile from './../screens/Profile';
import DetailsSelection from './../screens/DetailsSelection';
import DetailsLitro from './../screens/DetailsLitro';
import DetailsLaugfs from './../screens/DetailsLaugfs';

const Stack = createNativeStackNavigator();


const RoostStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: "#1d1e13",
                    headerTransparent: true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Welcome" component={Welcome} />
                <Stack.Screen name="Forget_Password" component={Forget_Password} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Home" component={Home} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="Dashbord" component={Dashbord} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="Profile" component={Profile} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="DetailsSelection" component={DetailsSelection} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="DetailsLitro" component={DetailsLitro} />
                <Stack.Screen options={{headerTintColor: "#ffff" }} name="DetailsLaugfs" component={DetailsLaugfs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} 


export default RoostStack;