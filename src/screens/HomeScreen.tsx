
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.title}>LostSchool</Text>
        <Text style={styles.subtitle}>
          Objetos encontrados en tu institución
        </Text>
      </View>

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

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(drawer)/(tabs)/registrar')}
        >
          <Text style={styles.buttonText}>
            Registrar objeto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/(drawer)/(tabs)/objetos')}
        >
          <Text style={styles.secondaryButtonText}>
            Ver objetos encontrados
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    backgroundColor: '#0066FF',
    paddingHorizontal: 25,
    paddingTop: 65,
    paddingBottom: 30,
    borderBottomWidth: 6,
    borderBottomColor: '#FFD400',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 6,
  },
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
  button: {
    backgroundColor: '#0066FF',
    padding: 16,
    borderRadius: 12,
    marginTop: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#FFD400',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
