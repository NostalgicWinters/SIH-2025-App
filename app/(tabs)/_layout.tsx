import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/chat-white.png')} />,
        }}
      />
      <Tabs.Screen
        name="Map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/maps-and-flags.png')} />,
        }}
      />
      <Tabs.Screen
        name="Signup"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/user.png')} />,
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/user.png')} />,
        }}
      />
    </Tabs>
  );
}
