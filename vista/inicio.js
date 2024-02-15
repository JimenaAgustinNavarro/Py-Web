import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TuComponente = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.redSection]}>
        {/* Contenido de la primera sección */}
        <Text style={styles.text}>App de Ventas</Text>
        <Text style={[styles.text, styles.textod]}>Tu Sitio Ideal</Text>
      </View>

      <View style={[styles.section, styles.blackSection]}>
      <View style={{ marginTop: 100}}>
      <TouchableOpacity style={[styles.button, { marginBottom: 10 }]}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Esto asegura que los elementos se coloquen de forma vertical
  },
    section: {
    borderWidth: 0,
    borderColor: '#ccc',
    width: '1875px',
    alignItems: 'center',
  },
    redSection: {
     backgroundColor: 'red', // Fondo rojo para la primera sección
     aspectRatio: 5,
     paddingVertical: 300,
  },
    
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'white',
  },
  textod:{
    fontSize: 25,
    ontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'white',
  },
    
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    height:'60%',
    width: '250%',
    right: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default TuComponente;
