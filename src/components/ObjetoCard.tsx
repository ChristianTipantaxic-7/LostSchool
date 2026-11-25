import { StyleSheet, Text, View } from 'react-native';
import type { Objeto } from '../storage/objetosStorage';

type Props = {
  objeto: Objeto;
};

export default function ObjetoCard({ objeto }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>{objeto.nombre}</Text>
      <Text style={styles.categoria}>{objeto.categoria}</Text>
      <Text style={styles.descripcion}>{objeto.descripcion}</Text>
      <Text style={styles.lugar}>Lugar: {objeto.lugar}</Text>
      <Text style={styles.fecha}>Fecha: {objeto.fecha}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderLeftWidth: 5,
    borderLeftColor: '#0066FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066FF',
  },
  categoria: {
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 7,
  },
  descripcion: {
    color: '#555555',
    marginTop: 8,
  },
  lugar: {
    color: '#333333',
    marginTop: 10,
  },
  fecha: {
    color: '#777777',
    marginTop: 5,
    fontSize: 12,
  },
});