import { Text, View, StyleSheet } from 'react-native';

export default function EncabezadoHome() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LostSchool</Text>
      <Text style={styles.subtitle}>
        Objetos encontrados en tu institución
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});