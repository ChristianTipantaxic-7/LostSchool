
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  texto: string;
  onPress: () => void;
  deshabilitado?: boolean;
};

export default function BotonPrincipal({
  texto,
  onPress,
  deshabilitado = false,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={deshabilitado}
    >
      <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
