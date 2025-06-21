import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  const theme = useColorScheme() ?? 'light';
  const currentColors = Colors[theme];

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={[styles.heading, { backgroundColor: currentColors.card }]}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={currentColors.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { // Added a container style for potential outer margins/padding if needed later
    marginVertical: 4,
    borderRadius: 8, // Add rounded corners
    overflow: 'hidden', // Ensure background respects border radius
    borderWidth: 1,
    borderColor: currentColors.borderColor,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // Increased gap
    padding: 12, // Added padding
  },
  content: {
    marginTop: 1, // Separator line effect with container border
    padding: 12, // Added padding to content area
    marginLeft: 24,
  },
});
