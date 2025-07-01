import { Tabs } from 'expo-router';
import { Home, User, Settings, Info } from 'lucide-react-native';
import { useColorScheme } from '~/lib/useColorScheme';

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme();
  
  const tabBarStyle = {
    backgroundColor: isDarkColorScheme ? '#020617' : '#ffffff',
    borderTopColor: isDarkColorScheme ? '#334155' : '#e5e5e5',
  };

  const tabBarActiveTintColor = isDarkColorScheme ? '#f1f5f9' : '#000000';
  const tabBarInactiveTintColor = isDarkColorScheme ? '#64748b' : '#666666';

  return (
    <Tabs
      screenOptions={{
        tabBarStyle,
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => <Info color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
