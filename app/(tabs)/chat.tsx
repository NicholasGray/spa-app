import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Student Chat</ThemedText>
      <ThemedView style={styles.chatArea}>
        <ThemedText>Chat messages will appear here.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={[styles.sendButton, { backgroundColor: Colors[theme].tint }]}>
          <ThemedText style={styles.sendText}>Send</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatArea: {
    flex: 1,
    marginVertical: 16,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  sendText: {
    color: '#fff',
  },
});
