
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  etiqueta: string;
  valor: string;
  placeholder: string;
  onChangeText: (texto: string) => void;
  multiline?: boolean;
};

export default function CampoTexto({
  etiqueta,
  valor,
  placeholder,
  onChangeText,
  multiline = false,
}: Props) {
  return (
    <View>
      <Text style={styles.label}>{etiqueta}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        placeholder={placeholder}
        value={valor}
        onChangeText={onChangeText}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
