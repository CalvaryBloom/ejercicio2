/*
* Apartado 8.
* Implementa las instrucciones necesarias para que el cuadrado realice los mismos 
* cambios que en el ejercicio anterior, pero esta vez cuando llegue a ocupar el 
* tamaño que elijas –por ejemplo, el ancho de la pantalla-, 
* volverá al tamaño inicial y empezará a aumentar otra vez hasta llegar al tamaño límite fijado.
*/
import { View, Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';

export default function App() {

  const {width: screenWidth} = Dimensions.get('window');
  const maxWidth = screenWidth * 0.9;

  const [backColor, setBackColor] = useState('green');
  const [squareColor, setSquareColor] = useState('yellow');
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  function handleOnPress() {
    if (backColor === 'yellow') {
      setBackColor('green');
      setSquareColor('yellow');
    } else {
      setBackColor('yellow');
      setSquareColor('green');
    }
    if(width <= maxWidth){
      setWidth(width*1.05);
      setHeight(height*1.05);
    }else if(width >= maxWidth){
      setHeight(200);
      setWidth(200);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: backColor }]}>
      <View style={[
        styles.square,
        {
          backgroundColor: squareColor,
          width: width,
          height: height
        }
      ]} />
      <Pressable onPress={() => handleOnPress()}>
        <Text />
        <Text style={styles.text}>Púlsame!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    size: '100',
    mt: '-2',
    marginTop: -6,
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
  text: {
    height: 40,
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 6,
  }
});