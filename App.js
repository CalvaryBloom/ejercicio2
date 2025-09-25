/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 25/08/2025 
*
* Apartado 10:
* Implementa las instrucciones necesarias para que, en el ejercicio anterior, 
* cada vez que el usuario pulse sobre el componente Pressable, además de los 
* cambios indicados, se cambie el color del fondo de la pantalla. Los valores 
* para este color cambiarán entre blanco y negro.
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
    if (backColor === 'white') {
      setBackColor('black');
      setSquareColor('yellow');
    } else {
      setBackColor('white');
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