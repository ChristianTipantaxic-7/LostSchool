
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { guardarObjeto } from '../../../src/storage/objetosStorage';

const categorias = [
  'Útiles escolares',
  'Prendas de vestir',
  'Accesorios',
  'Dispositivos',
  'Otros',
];

export default function RegistrarScreen() {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [lugar, setLugar] = useState('');
  const [guardando, setGuardando] = useState(false);

  async function registrar() {
    if (!nombre.trim() || !categoria || !descripcion.trim() || !lugar.trim()) {
      Alert.alert('Campos incompletos', 'Completa todos los campos.');
      return;
    }

    try {
      setGuardando(true);

      await guardarObjeto({
        id: Date.now().toString(),
        nombre: nombre.trim(),
        categoria,
        descripcion: descripcion.trim(),
        lugar: lugar.trim(),
        fecha: new Date().toLocaleDateString('es-EC'),
      });

      setNombre('');
      setCategoria('');
      setDescripcion('');
      setLugar('');

      Alert.alert('Registro exitoso', 'El objeto se guardó correctamente.');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el objeto.');
    } finally {
      setGuardando(false);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Registrar objeto</Text>
      <Text style={styles.subtitle}>
        Ingresa los datos del objeto encontrado.
      </Text>

      <Text style={styles.label}>Nombre del objeto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Cuaderno azul"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Categoría</Text>
      <View style={styles.categories}>
        {categorias.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.category,
              categoria === item && styles.categorySelected,
            ]}
            onPress={() => setCategoria(item)}
          >
            <Text
              style={[
                styles.categoryText,
                categoria === item && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe cómo es el objeto..."
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      <Text style={styles.label}>Lugar donde se encontró</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Patio del colegio"
        value={lugar}
        onChangeText={setLugar}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={registrar}
        disabled={guardando}
      >
        <Text style={styles.buttonText}>
          {guardando ? 'Guardando...' : 'Guardar objeto'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 22,
    paddingBottom: 40,
  },
  title: {
    color: '#0066FF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555555',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 22,
  },
  label: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 14,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  categories: {
    gap: 9,
  },
  category: {
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
  },
  categorySelected: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  categoryText: {
    color: '#333333',
    fontSize: 14,
  },
  categoryTextSelected: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0066FF',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 28,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
