import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

export default function PaymentsScreen() {
  const handlePay = () => {
    Linking.openURL('https://example.com/payments');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <Text style={styles.placeholder}>
        Outstanding balance: TBD
      </Text>
      <Button title="Pay Online" onPress={handlePay} />
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
    marginBottom: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
