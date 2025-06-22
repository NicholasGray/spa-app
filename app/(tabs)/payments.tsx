import { Linking, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PaymentsScreen() {
  const theme = useColorScheme() ?? 'light';
  const handlePay = () => {
    Linking.openURL('https://example.com/payments');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Payments</ThemedText>
      <ThemedText style={styles.balance}>Outstanding Balance: $0.00</ThemedText>
      <TouchableOpacity style={[styles.payButton, { backgroundColor: Colors[theme].tint }]} onPress={handlePay}>
        <ThemedText style={styles.payText}>Go to Payment Portal</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  balance: {
    marginVertical: 16,
  },
  payButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  payText: {
    color: '#fff',
  },
});
