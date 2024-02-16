import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TuComponente = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.redSection]}>
        <Text style={styles.text}>App de Ventas</Text>
        <Text style={[styles.text, styles.textod]}>Tu Sitio Ideal</Text> 
    </View>

      <View style={[styles.section, styles.blackSection]}>
      <View style={{ marginTop: 50}}>
      <TouchableOpacity style={[styles.button, { marginBottom: 10 }]}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Registrarse </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Esto asegura que los elementos se coloquen de forma vertical
  },
    section: {
    borderColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
    redSection: {
     backgroundColor: 'red', // Fondo rojo para la primera sección
     paddingVertical: '55%',
     justifyContent: 'center',
  },
    
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    top:'70%',
  },
  textod:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  }, 
  button: {
    backgroundColor: 'red',
    padding:'1%',
    borderRadius: 8,
    height:'25%',
    width: '100%',
    justifyContent: 'space-between',
    paddingStart:'55%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    height:50,
    right:'60%',
    top:'30%',
  },
});

export default TuComponente;
