import { View, Text, StyleSheet } from 'react-native';

export default function ObjetosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Objetos encontrados</Text>
      <Text style={styles.description}>
        Aquí aparecerán los objetos registrados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  title: {
    color: '#0066FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: '#444444',
    marginTop: 12,
    fontSize: 16,
  },
});