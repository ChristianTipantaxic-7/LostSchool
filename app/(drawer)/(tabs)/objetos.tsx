import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from 'expo-router';

import {
  obtenerObjetos,
  type Objeto,
} from '../../../src/storage/objetosStorage';

import ObjetoCard from '../../../src/components/ObjetoCard';
import styles from '../../../src/styles/objetosStyles';

export default function ObjetosScreen() {
  const [objetos, setObjetos] = useState<Objeto[]>([]);
  const [cargando, setCargando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let activo = true;

      async function cargarObjetos() {
        try {
          const datos = await obtenerObjetos();

          if (activo) setObjetos(datos);
        } finally {
          if (activo) setCargando(false);
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
        renderItem={({ item }) => <ObjetoCard objeto={item} />}
      />
    </View>
  );
}