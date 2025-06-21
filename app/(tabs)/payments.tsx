import { Linking, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function PaymentsScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  const handlePay = () => {
    Linking.openURL('https://example.com/payments'); // Keep mock URL for now
  };

  // Dynamic styles
  const dynamicStyles = {
    payButton: {
      paddingVertical: 14, // Increased padding
      paddingHorizontal: 20, // Increased padding
      backgroundColor: currentColors.accent, // Use accent color for payment button
      borderRadius: 8,
      alignItems: 'center', // Center text inside button
      justifyContent: 'center',
      marginTop: 24, // Add more margin above the button
      width: '80%', // Make button wider
      alignSelf: 'center', // Center the button
    },
    payText: {
      // ThemedText will handle its own color. We ensure contrast by picking light/dark colors.
      // If accent is dark red, text is light. If accent is light red (dark mode), text is dark.
      color: colorScheme === 'light' ? Colors.dark.text : Colors.dark.text, // White/light text on red button generally works
      fontSize: 18, // Larger text for button
      fontFamily: 'Lato-Bold',
    },
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.pageTitle}>Payments</ThemedText>
      <ThemedView style={[styles.balanceCard, { backgroundColor: currentColors.card, borderColor: currentColors.borderColor }]}>
        <ThemedText type="defaultSubtitle" style={{ color: currentColors.text }}>Outstanding Balance:</ThemedText>
        <ThemedText type="title" style={{ color: currentColors.primary, marginTop: 4 }}>$0.00</ThemedText>
      </ThemedView>
      <TouchableOpacity style={dynamicStyles.payButton} onPress={handlePay}>
        <ThemedText
          lightColor={Colors.dark.text} // Light text on light theme's accent button
          darkColor={Colors.dark.text}  // Light text on dark theme's accent button (assuming accentDark is dark enough)
          type="defaultSemiBold"
          style={{ fontSize: 18 }} // Ensure font style matches
        >
          Go to Payment Portal
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Increased padding
    alignItems: 'center', // Center content
    paddingTop: Platform.OS === 'android' ? 30 : 20,
  },
  pageTitle: {
    marginBottom: 24, // More space below title
    textAlign: 'center',
  },
  balanceCard: {
    padding: 20,
    borderRadius: 12, // More rounded corners
    borderWidth: 1,
    alignItems: 'center', // Center text in card
    width: '100%', // Full width card
    marginBottom: 20,
    shadowColor: '#000', // Basic shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android
  }
});
