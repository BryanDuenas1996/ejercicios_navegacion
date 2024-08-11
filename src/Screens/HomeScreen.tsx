import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};
export const HomeScreen= ({navigation}:Props)=> {

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.title}>Bienvenido</Text>
        <Image 
          source={{ uri: 'https://significado.com/contenido/imp/apps.jpg' }} // Reemplaza con tu URL de imagen
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} 
        onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Ir al Form</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4F46E5', // Color índigo
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Color blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
});
