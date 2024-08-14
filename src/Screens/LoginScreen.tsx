import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

interface FormLogin{
  email:string,
  password:string
};

interface User{
  id:number,
  user:string,
  password:string
};

interface Props extends StackScreenProps<any, any>{};
export const LoginScreen= ({navigation}:Props)=> {
  const users: User[]=[
    {id:1, user:'Bryan',password:'12345'},
    {id:2, user:'ryan',password:'123455'},
    {id:3, user:'carlos',password:'123455'},
    {id:4, user:'bri',password:'123456'}
  ];
  const [formLogin, setFormLogin]= useState<FormLogin>({
    email:'',
    password:''
  });

  const handleSetValues=(name:string, value: string)=>{
    setFormLogin({...formLogin,[name]:value});
  }

  const handleSignin=()=>{
    if (!formLogin.email || !formLogin.password){
      Alert.alert("Error", "Porfavor completar los campos!");
      return;
    }

    if(!verfyUser()){
      Alert.alert("Error", "Usuario o contraseñaincorrecta");
      return;
    }
    console.log(formLogin)
  }

  //vERIFICAR SI EXISTE USER Y PASSWORD
  const verfyUser=()=>{
    const existUser= users.filter(user=>user.user=== formLogin.email && user.password===formLogin.password)[0];
    return existUser;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#B0B0B0"
          onChangeText={(value)=>handleSetValues('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
          onChangeText={(value)=>handleSetValues('password', value)}
        />
        <TouchableOpacity style={styles.button} 
          onPress={handleSignin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#1F2937',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#4F46E5', // Color índigo
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Color blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
});


