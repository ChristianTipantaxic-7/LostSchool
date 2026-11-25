import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import EncabezadoHome from '../components/EncabezadoHome';
import BienvenidaHome from '../components/BienvenidaHome';
import styles from '../styles/homeStyles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="dark" />

      <EncabezadoHome />
      <BienvenidaHome />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(drawer)/(tabs)/registrar')}
      >
        <Text style={styles.buttonText}>Registrar objeto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push('/(drawer)/(tabs)/objetos')}
      >
        <Text style={styles.secondaryButtonText}>
          Ver objetos encontrados
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}