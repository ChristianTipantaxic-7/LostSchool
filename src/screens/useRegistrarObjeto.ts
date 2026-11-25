import { useState } from 'react';
import { Alert } from 'react-native';
import { guardarObjeto } from '../storage/objetosStorage';

export default function useRegistrarObjeto() {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [lugar, setLugar] = useState('');
  const [guardando, setGuardando] = useState(false);

  async function registrar() {
    if (
      !nombre.trim() ||
      !categoria ||
      !descripcion.trim() ||
      !lugar.trim()
    ) {
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
    } catch {
      Alert.alert('Error', 'No se pudo guardar el objeto.');
    } finally {
      setGuardando(false);
    }
  }

  return {
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
  };
}