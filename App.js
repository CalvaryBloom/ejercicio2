import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [backColor, setBackColor] = useState('green');
  const [squareColor, setSquareColor] = useState('yellow');
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  function handleOnPress() {
    if (backColor === 'yellow') {
      setBackColor('green');
      setSquareColor('yellow');
      setWidth(200);
      setHeight(200);
    } else {
      setBackColor('yellow');
      setSquareColor('green');
      setWidth(300);
      setHeight(100);
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