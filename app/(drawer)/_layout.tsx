
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0066FF',
        },
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#0066FF',
        drawerActiveBackgroundColor: '#FFF3B0',
        drawerInactiveTintColor: '#333333',
        drawerStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Menú principal',
          drawerLabel: 'Inicio',
        }}
      />
    </Drawer>
  );
}
