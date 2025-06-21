import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function BroadcastScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Broadcasts</ThemedText>
      <ThemedText style={styles.message}>
        School announcements will appear here.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  message: {
    marginTop: 16,
  },
});
