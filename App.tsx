
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>LostSchool</Text>
        <Text style={styles.subtitle}>
          Encuentra lo que perdiste en tu colegio
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcome}>¡Bienvenido!</Text>
        <Text style={styles.description}>
          Aquí podrás consultar los objetos encontrados en tu institución.
        </Text>

        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Todavía no hay objetos</Text>
          <Text style={styles.emptyText}>
            Los objetos registrados aparecerán aquí.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#1E3A8A',
    padding: 25,
    paddingTop: 65,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#DBEAFE',
    fontSize: 14,
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  description: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#374151',
  },
  emptyText: {
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
});
