
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  categorias: string[];
  seleccionada: string;
  onSeleccionar: (categoria: string) => void;
};

export default function SelectorCategoria({
  categorias,
  seleccionada,
  onSeleccionar,
}: Props) {
  return (
    <View>
      <Text style={styles.label}>Categoría</Text>

      {categorias.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.category,
            seleccionada === item && styles.selected,
          ]}
          onPress={() => onSeleccionar(item)}
        >
          <Text
            style={[
              styles.categoryText,
              seleccionada === item && styles.selectedText,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
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
  category: {
    padding: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    marginBottom: 9,
  },
  selected: {
    backgroundColor: '#0066FF',
    borderColor: '#0066FF',
  },
  categoryText: {
    color: '#333333',
    fontSize: 14,
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
