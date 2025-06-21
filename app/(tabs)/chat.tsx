import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  // Define dynamic styles here to use currentColors
  // These are created once per render but only recalculated if colorScheme changes.
  const dynamicStyles = {
    chatArea: {
      flex: 1,
      marginVertical: 16,
      borderWidth: 1,
      borderRadius: 8,
      padding: 12, // Increased padding
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: currentColors.borderColor,
      backgroundColor: currentColors.card,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 8,
      padding: Platform.OS === 'ios' ? 12 : 10,
      marginRight: 8,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: currentColors.text,
      borderColor: currentColors.borderColor,
      backgroundColor: currentColors.background, // Or currentColors.card for a different look
    },
    sendButton: {
      paddingVertical: Platform.OS === 'ios' ? 12 : 10,
      paddingHorizontal: 16,
      backgroundColor: currentColors.primary,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center', // Center text horizontally too
    },
    sendText: {
      // ThemedText will handle its own color, but we can override if needed.
      // For a button with primary background, we need contrasting text.
      color: colorScheme === 'light' ? Colors.dark.text : Colors.light.text, // Example: White text on dark blue, dark text on light blue
      fontSize: 16,
      fontFamily: 'Lato-Bold',
    },
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.pageTitle}>Student Chat</ThemedText>
      <ThemedView style={dynamicStyles.chatArea}>
        <ThemedText>Chat messages will appear here.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputRow}>
        <TextInput
          style={dynamicStyles.input}
          placeholder="Type your message..." // Added ellipsis
          placeholderTextColor={currentColors.placeholder}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={dynamicStyles.sendButton}>
          {/* ThemedText inside TouchableOpacity for the send button */}
          <ThemedText lightColor={Colors.dark.text} darkColor={Colors.light.text} type="defaultSemiBold">Send</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

// Static styles that don't depend on colorScheme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 24 : 16, // Extra padding for Android status bar
  },
  pageTitle: {
    marginBottom: 16,
    textAlign: 'center', // Center title
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12, // Add some margin above input row
  },
});
