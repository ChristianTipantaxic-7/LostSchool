
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import {
  obtenerObjetos,
  Objeto,
} from '../../../src/storage/objetosStorage';

export default function ObjetosScreen() {
  const [objetos, setObjetos] = useState<Objeto[]>([]);
  const [cargando, setCargando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let activo = true;

      async function cargarObjetos() {
        try {
          const datos = await obtenerObjetos();

          if (activo) {
            setObjetos(datos);
          }
        } finally {
          if (activo) {
            setCargando(false);
          }
        }
      }

      cargarObjetos();

      return () => {
        activo = false;
      };
    }, [])
  );

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0066FF" />
        <Text style={styles.loadingText}>Cargando objetos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Objetos encontrados</Text>
      <Text style={styles.subtitle}>
        Objetos registrados en la institución
      </Text>

      <FlatList
        data={objetos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>
              Todavía no hay objetos
            </Text>
            <Text style={styles.emptyText}>
              Los objetos que registres aparecerán aquí.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.objectName}>{item.nombre}</Text>
            <Text style={styles.category}>{item.categoria}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
            <Text style={styles.place}>
              Lugar: {item.lugar}
            </Text>
            <Text style={styles.date}>
              Fecha: {item.fecha}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#555555',
  },
  title: {
    color: '#0066FF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555555',
    marginTop: 7,
    marginBottom: 18,
  },
  list: {
    paddingBottom: 25,
    flexGrow: 1,
  },
  empty: {
    backgroundColor: '#FFF8D6',
    borderWidth: 1,
    borderColor: '#FFD400',
    borderRadius: 12,
    padding: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  emptyText: {
    color: '#555555',
    textAlign: 'center',
    marginTop: 8,
  },
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
  objectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066FF',
  },
  category: {
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 7,
  },
  description: {
    color: '#555555',
    marginTop: 8,
  },
  place: {
    color: '#333333',
    marginTop: 10,
  },
  date: {
    color: '#777777',
    marginTop: 5,
    fontSize: 12,
  },
});
