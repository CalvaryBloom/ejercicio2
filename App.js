/*
* Apartado 9.
* Implementa las instrucciones necesarias para que el cuadrado realice 
* los mismos cambios que en el ejercicio anterior, pero esta vez cuando 
* llegue al tamaño que elijas –el ancho de la pantalla, por ejemplo-, 
* irá reduciendo el tamaño hasta llegar al de inicio, donde empezará a 
* aumentar otra vez hasta llegar al tamaño límite fijado. 
* Y así sucesivamente según el usuario vaya pulsando el componente Pressable.
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
  const [flag, setFlag] = useState(false);

  function handleOnPress() {
    if (backColor === 'yellow') {
      setBackColor('green');
      setSquareColor('yellow');
    } else {
      setBackColor('yellow');
      setSquareColor('green');
    }

    if(width <= 200)
      setFlag(false);
    else if(width >= maxWidth)
      setFlag(true);
    
    if(!flag && (width <= 200 || width <= maxWidth)){
      setWidth(width*1.1);
      setHeight(height*1.1);
    }else if(flag){
      setWidth(width/1.1);
      setHeight(height/1.1);
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