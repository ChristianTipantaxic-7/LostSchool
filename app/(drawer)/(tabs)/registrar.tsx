import { ScrollView, Text } from 'react-native';

import CampoTexto from '../../../src/components/CampoTexto';
import SelectorCategoria from '../../../src/components/SelectorCategoria';
import BotonPrincipal from '../../../src/components/BotonPrincipal';
import useRegistrarObjeto from '../../../src/screens/useRegistrarObjeto';
import styles from '../../../src/styles/registrarStyles';

const categorias = [
  'Útiles escolares',
  'Prendas de vestir',
  'Accesorios',
  'Dispositivos',
  'Otros',
];

export default function RegistrarScreen() {
  const {
    nombre,
    setNombre,
    categoria,
    setCategoria,
    descripcion,
    setDescripcion,
    lugar,
    setLugar,
    guardando,
    registrar,
  } = useRegistrarObjeto();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Registrar objeto</Text>
      <Text style={styles.subtitle}>
        Ingresa los datos del objeto encontrado.
      </Text>

      <CampoTexto
        etiqueta="Nombre del objeto"
        valor={nombre}
        placeholder="Ej. Cuaderno azul"
        onChangeText={setNombre}
      />

      <SelectorCategoria
        categorias={categorias}
        seleccionada={categoria}
        onSeleccionar={setCategoria}
      />

      <CampoTexto
        etiqueta="Descripción"
        valor={descripcion}
        placeholder="Describe cómo es el objeto..."
        onChangeText={setDescripcion}
        multiline
      />

      <CampoTexto
        etiqueta="Lugar donde se encontró"
        valor={lugar}
        placeholder="Ej. Patio del colegio"
        onChangeText={setLugar}
      />

      <BotonPrincipal
        texto={guardando ? 'Guardando...' : 'Guardar objeto'}
        onPress={registrar}
        deshabilitado={guardando}
      />
    </ScrollView>
  );
}