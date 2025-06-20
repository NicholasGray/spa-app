import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BroadcastsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Broadcasts</Text>
      <Text style={styles.placeholder}>
        This screen will show announcements from the university.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  placeholder: {
    marginTop: 8,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
