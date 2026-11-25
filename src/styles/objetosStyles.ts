import { StyleSheet } from 'react-native';

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
});

export default styles;