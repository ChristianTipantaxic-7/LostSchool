
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Objeto = {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  lugar: string;
  fecha: string;
};

const CLAVE_STORAGE = '@lostschool_objetos';

export async function obtenerObjetos(): Promise<Objeto[]> {
  try {
    const datos = await AsyncStorage.getItem(CLAVE_STORAGE);

    if (datos === null) {
      return [];
    }

    return JSON.parse(datos) as Objeto[];
  } catch (error) {
    console.error('Error al obtener los objetos:', error);
    return [];
  }
}

export async function guardarObjeto(objeto: Objeto): Promise<void> {
  try {
    const objetos = await obtenerObjetos();
    const nuevosObjetos = [objeto, ...objetos];

    await AsyncStorage.setItem(
      CLAVE_STORAGE,
      JSON.stringify(nuevosObjetos)
    );
  } catch (error) {
    console.error('Error al guardar el objeto:', error);
    throw error;
  }
}

export async function eliminarObjeto(id: string): Promise<void> {
  try {
    const objetos = await obtenerObjetos();
    const nuevosObjetos = objetos.filter((objeto) => objeto.id !== id);

    await AsyncStorage.setItem(
      CLAVE_STORAGE,
      JSON.stringify(nuevosObjetos)
    );
  } catch (error) {
    console.error('Error al eliminar el objeto:', error);
    throw error;
  }
}
