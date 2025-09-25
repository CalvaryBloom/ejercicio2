# Actividades onPress y useState en React Native - Ejercicio 2.

## 📱 Programación Multimedia y de Dispositivos Móviles - BLOQUE 1

### 🎯 Objetivos
Aprender a implementar eventos con `onPress` y `Pressable` en React Native, utilizando `useState` para manejar el estado de los componentes.

---

## 📋 Descripción General

En este bloque de actividades prácticas aprenderemos a implementar el evento `onPress` en el componente 'core' `Pressable`. Para ello actualizaremos los distintos estados necesarios para realizar cada ejercicio mediante `useState`.

---

## 🚀 Ejercicios - Primera Parte

### Código Base Inicial
```javascript
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Title</Text>
      <Image style={styles.image} source={require('./assets/snack-icon.png')} />
      <Pressable>
        <Text style={styles.text}>Púlsame!</Text>
      </Pressable>
    </View>
  );
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
```

### 📝 Ejercicio 1
**Objetivo:** Cambio de color de fondo entre azul y verde.

Implementa la lógica necesaria para que cuando el usuario pulse el componente `Pressable`, el color del fondo de la pantalla se cambie a azul. Si vuelve a pulsar se cambiará a verde. El color del fondo alternará entre azul y verde con cada pulsación.

### 📝 Ejercicio 2
**Objetivo:** Inicialización con color verde sin modificar estilos.

Implementa la lógica necesaria para que, **sin tocar los estilos contenidos en la constante styles**, cuando se renderice la interfaz, el color del fondo de pantalla sea verde. Al pulsar el `Pressable`, alternará entre azul y verde.

### 📝 Ejercicio 3
**Objetivo:** Cambio de fondo, título y múltiples estados.

Implementa la lógica para que, **sin modificar los estilos**, cuando se renderice la interfaz:
- Color de fondo: verde
- Al pulsar `Pressable`:
  - Fondo cambia a amarillo
  - Texto cambia a "My New Title"
- Al volver a pulsar:
  - Fondo vuelve a verde
  - Texto vuelve a "My Title"

### 📝 Ejercicio 4
**Objetivo:** Agregar cambio de imagen al Ejercicio 3.

Implementa la lógica del Ejercicio 3 pero añadiendo que cada vez que el usuario pulse el `Pressable`, también se cambie la imagen que se renderiza en pantalla.

---

## 🚀 Ejercicios - Segunda Parte

### Código Base para Ejercicios 5-10
```javascript
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
      <Pressable>
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
```

### 📝 Ejercicio 5
**Objetivo:** Transformación cuadrado ↔ rectángulo con cambios de color.

Al pulsar `Pressable`:
- Fondo cambia a amarillo
- Cuadrado se convierte en rectángulo verde
- Al volver a pulsar: fondo verde, cuadrado amarillo

### 📝 Ejercicio 6
**Objetivo:** Reducción progresiva del cuadrado.

Al pulsar `Pressable`:
- Color del cuadrado alterna entre amarillo y verde
- Tamaño se reduce progresivamente
- Continúa hasta que el cuadrado desaparezca

### 📝 Ejercicio 7
**Objetivo:** Aumento progresivo del cuadrado con límite.

Similar al Ejercicio 6 pero:
- El cuadrado **aumenta** de tamaño en lugar de disminuir
- Se detiene al alcanzar un tamaño límite (ej: ancho de pantalla)
- Mantiene el cambio de colores

### 📝 Ejercicio 8
**Objetivo:** Crecimiento cíclico del cuadrado.

Basado en el Ejercicio 7:
- Cuando alcanza el tamaño límite, vuelve al tamaño inicial
- Empieza a crecer nuevamente
- Ciclo continuo de crecimiento

### 📝 Ejercicio 9
**Objetivo:** Crecimiento y decrecimiento cíclico.

Basado en el Ejercicio 8:
- Crece hasta el tamaño límite
- **Decrece** hasta el tamaño inicial
- Vuelve a crecer
- Ciclo continuo de crecimiento ↔ decrecimiento

### 📝 Ejercicio 10
**Objetivo:** Ejercicio 9 + cambio de fondo de pantalla.

Implementa el Ejercicio 9 añadiendo:
- Cambio del color de fondo de pantalla con cada pulsación
- Alterna entre blanco y negro

---

## 🛠️ Tecnologías Utilizadas

- **React Native**
- **useState** (para manejo de estado)
- **Pressable** (componente de eventos touch)
- **StyleSheet** (para estilos)

## 📚 Conceptos Clave

- Manejo de eventos `onPress`
- Hook `useState` para estado local
- Componente `Pressable`
- Estilos dinámicos en React Native
- Renderizado condicional

---

## 🎓 Recursos Adicionales

- Documentación oficial de React Native: [https://reactnative.dev/](https://reactnative.dev/)
- Guía de `useState`: [https://react.dev/reference/react/useState](https://react.dev/reference/react/useState)
