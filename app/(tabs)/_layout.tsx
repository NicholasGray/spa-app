import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground'; // May need adjustment or conditional usage
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light'; // Ensure colorScheme is not undefined

  const currentColors = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: currentColors.tabIconSelected,
        tabBarInactiveTintColor: currentColors.tabIconDefault, // Explicitly set inactive tint
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          // On Android, we might want a solid background color instead of the blur effect.
          // On iOS, TabBarBackground provides the blur.
          Platform.OS === 'ios' ? <TabBarBackground /> : <View style={{ flex: 1, backgroundColor: currentColors.card }} />
        ),
        tabBarStyle: {
          position: 'absolute', // Keep floating for blur effect on iOS and modern Android
          borderTopWidth: Platform.OS === 'android' ? 1 : 0, // Optional: add a top border on Android
          borderTopColor: currentColors.borderColor,
          backgroundColor: Platform.OS === 'android' ? currentColors.card : undefined, // Solid background for Android
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={26} name={focused ? "house.fill" : "house"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={26} name={focused ? "paperplane.fill" : "paperplane"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={26} name={focused ? "bubble.left.and.bubble.right.fill" : "bubble.left.and.bubble.right"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="broadcast"
        options={{
          title: 'Broadcast',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={26} name={focused ? "megaphone.fill" : "megaphone"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={26} name={focused ? "creditcard.fill" : "creditcard"} color={color} />,
        }}
      />
    </Tabs>
  );
}
