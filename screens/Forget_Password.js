import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../components/styles";
import {Octicons, Ionicons} from '@expo/vector-icons';
import { Formik } from 'formik';
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";


const Forget_Password = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);


    return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>SLgasApp</Text>
      <Text style={styles.subTitle}>Forget Password</Text>
      <Formik
        initialValues={{ email: '', OTP: '', password: '',confirmPassword: '' }}
        onSubmit={(values) =>{
          console.log(values);
          navigation.navigate("Welcome")
        }}>
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
            <View style={styles.extraView}>
              <TouchableOpacity onPress={() => {}} ><Text style={styles.textLink}>Send OTP Code</Text></TouchableOpacity>
            </View>
            <View style={styles.line}/>
            <MyTextInput 
              label= {<Text>OTP Code</Text> }
              icon="mail"
              placeholder="123456"
              placeholderTextColor='#9ca3af'
              onChangeText={handleChange('OTP')}
              onBlur={handleBlur('OTP')}
              value={values.OTP}
            />
            <View style={styles.line}/>
            <MyTextInput 
                label= {<Text>New Password</Text> }
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
            <MyTextInput 
                label= {<Text>Confirm Password</Text> }
                icon="lock"
                placeholder="* * * * * * * "
                placeholderTextColor='#9ca3af'
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
            />
            <View style={styles.line}/>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.sinUpButton}>
              <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>



          </View>}
      </Formik>
      <Text style={{color: '#888', fontSize: 15,paddingTop:80}}>© CopyRights 2022 By SLgasApp</Text>
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

export default Forget_Password;