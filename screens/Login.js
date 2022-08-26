import React, {useState} from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../components/styles";
import {Octicons, Ionicons} from '@expo/vector-icons';
import { Formik } from 'formik';
import logo from './../assets/logo.png';
import title from './../assets/title.png';
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";


const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

    return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title_img }>
      <ImageBackground source={title} style={styles.title_img_style}>
      <View style={styles.header_img}>
      <Image source={logo} style={styles.image} /> 
      </View>
      </ImageBackground></View>
      <Text style={styles.title_login}>Account Login</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) =>{
          console.log(values);
          navigation.navigate("Welcome")
        }}
      >
        {({handleChange, handleBlur, handleSubmit, values}) => <View style={styles.formArea}>
            <MyTextInput 
              label= {<Text>Email Address</Text> }
              icon="mail"
              placeholder="example@gmail.com"
              placeholderTextColor='#9ca3af'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <MyTextInput 
              label= {<Text>Password</Text> }
              icon="lock"
              placeholder="* * * * * * * "
              placeholderTextColor='#9ca3af'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.line}/>
            
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.sinUpButton}>
              <Text style={styles.buttonText}>Don't have an account SignUp</Text>
            </TouchableOpacity>

            <View style={styles.extraView}>
              <TouchableOpacity onPress={() => navigation.navigate("Forget_Password")}>
                <Text style={styles.textLink}>Forget password </Text>
              </TouchableOpacity>
            </View>

          </View>}
      </Formik>
        <Text style={{color: '#888', fontSize: 15}}>© CopyRights 2022 By SLgasApp</Text>
    </View>
    </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return(
    <View>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color='#26B23D'/>
      </View>
      <View style={styles.inputlabel}>{label}</View>
      <View style={styles.textInput}><TextInput {...props} /></View>
      {isPassword && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.rightIcon}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={"#26B23D"}/>
        </TouchableOpacity>
      )}

    </View>
  )
}

export default Login;