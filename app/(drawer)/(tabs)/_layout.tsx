
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0066FF',
        },
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#0066FF',
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#FFD400',
          borderTopWidth: 2,
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarLabel: 'Inicio',
        }}
      />

      <Tabs.Screen
        name="objetos"
        options={{
          title: 'Objetos encontrados',
          tabBarLabel: 'Objetos',
        }}
      />

      <Tabs.Screen
        name="registrar"
        options={{
          title: 'Registrar objeto',
          tabBarLabel: 'Registrar',
        }}
      />
    </Tabs>
  );
}
