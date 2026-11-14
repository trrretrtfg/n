import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const tabs = [
  ['index', 'الذكريات', 'images-outline', 'images'],
  ['rooms', 'الغرف', 'people-outline', 'people'],
  ['notifications', 'الإشعارات', 'notifications-outline', 'notifications'],
  ['profile', 'حسابي', 'person-outline', 'person']
];

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#496B5A',
      tabBarInactiveTintColor: '#9AA49D',
      tabBarStyle: { height: 64, paddingTop: 7, paddingBottom: 8, backgroundColor: '#FFFFFF', borderTopColor: '#EEF0ED' },
      tabBarLabelStyle: { fontSize: 11, fontFamily: 'System' }
    }}>
      {tabs.map(([name, title, outline, filled]) => (
        <Tabs.Screen key={name} name={name} options={{
          title,
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? filled : outline} size={size} color={color} />
        }} />
      ))}
    </Tabs>
  );
}