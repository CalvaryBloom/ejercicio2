import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Title</Text>
      <Image style={styles.image} source={require('./assets/snack-icon.png')} />
      <Pressable>
        <Text style={styles.text}>Púlsame!</Text>
      </Pressable>
    </View>);
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: 'yellow', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  title: { 
    fontSize: 25, 
    fontWeight: 'bold', 
    fontStyle: 'italic', 
    textDecorationLine: 'underline', 
  }, 
  image: { 
    width: 200, 
    height: 200, 
  }, 
  text: { 
    height: 40, 
    width: 80, 
    backgroundColor: 'blue', 
    borderRadius: 8, 
    padding: 6, 
  }, 
});
