/*
* Apartado 7.
* Implementa las instrucciones necesarias para que el cuadrado realice los mismos cambios 
* que en el ejercicio anterior –en color y tamaño-, pero esta vez aumentando de tamaño 
* en lugar de disminuyendo. Cuando llegue a un tamaño de tu elección –por ejemplo, el ancho 
* de la pantalla-, dejará de agrandarse y se mantendrá en ese valor.
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
    if(width < maxWidth){
      setWidth(width*1.05);
      setHeight(height*1.05);
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