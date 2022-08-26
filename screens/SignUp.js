import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from "../components/styles";
import {Octicons, Ionicons} from '@expo/vector-icons';
import { Formik } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";


const SignUp = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      setDob(currentDate);
  }

  const showDatePicker = () => {
      setShow(true);

  }

    return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>SLgasApp</Text>
      <Text style={styles.subTitle}>Account SignUp</Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <Formik
        initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '',confirmPassword: '' }}
        onSubmit={(values) =>{
          console.log(values);
          navigation.navigate("Welcome")
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => <View style={styles.formArea}>
            <MyTextInput 
                label= {<Text>Full Name</Text> }
                icon="person"
                placeholder="Buddila Inul"
                placeholderTextColor='#9ca3af'
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
            />

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
                label= {<Text>Date of Birth</Text> }
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor='#9ca3af'
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                showDatePicker={showDatePicker}
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
            <TouchableOpacity onPress={handleSubmit} style={styles.sinUpButton}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>

            <View style={styles.line}/>

            <View style={styles.extraView}>
              <Text style={styles.extraText}>Already have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.textLink}>Login</Text></TouchableOpacity>
            </View>

          </View>}
      </Formik>
      <Text style={{color: '#888', fontSize: 15}}>© CopyRights 2022 By SLgasApp</Text>
    </View>
    </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
  return(
    <View>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color='#26B23D'/>
      </View>
      <View style={styles.inputlabel}>{label}</View>

      {!isDate && <View style={styles.textInput}><TextInput {...props} /></View>}
      {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
                <View style={styles.textInput}><TextInput {...props} /></View>
            </TouchableOpacity>
      )} 

      {isPassword && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.rightIcon}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={"#26B23D"}/>
        </TouchableOpacity>
      )}

    </View>
  )
}

export default SignUp;