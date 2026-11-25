import { Text, View, StyleSheet } from 'react-native';

export default function BienvenidaHome() {
  return (
    <View style={styles.content}>
      <Text style={styles.welcome}>¡Bienvenido!</Text>

      <Text style={styles.description}>
        Consulta los objetos encontrados y registra aquellos
        que hayas encontrado en el colegio.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Todavía no hay objetos
        </Text>
        <Text style={styles.cardText}>
          Los objetos registrados aparecerán aquí.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 22,
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0066FF',
  },
  description: {
    fontSize: 15,
    color: '#444444',
    marginTop: 10,
    lineHeight: 23,
  },
  card: {
    backgroundColor: '#FFF8D6',
    padding: 24,
    borderRadius: 14,
    marginTop: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD400',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardText: {
    color: '#555555',
    marginTop: 8,
    textAlign: 'center',
  },
});