import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'defaultSubtitle' | 'label';
  fontFamily?: 'Lato-Regular' | 'Lato-Bold' | 'SpaceMono'; // Add fontFamily prop
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  fontFamily = 'Lato-Regular', // Default to Lato-Regular
  ...rest
}: ThemedTextProps) {
  const themeTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const linkColor = useThemeColor({}, 'tint'); // Use tint color for links

  // Determine fontWeight based on fontFamily if it's Lato-Bold
  const fontWeight = fontFamily === 'Lato-Bold' ? 'bold' : undefined;

  const color = type === 'link' ? linkColor : themeTextColor;

  return (
    <Text
      style={[
        { color, fontFamily }, // Apply fontFamily
        fontWeight ? { fontWeight } : {}, // Apply fontWeight if bold
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'defaultSubtitle' ? styles.defaultSubtitle : undefined,
        // Link-specific color is now handled by the `color` variable above
        type === 'link' ? styles.link : undefined,
        type === 'label' ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Lato-Bold', // Use Lato-Bold for this style
  },
  title: {
    fontSize: 32,
    lineHeight: 38, // Adjusted line height
    fontFamily: 'Lato-Bold', // Use Lato-Bold
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Lato-Bold', // Use Lato-Bold
    lineHeight: 28,
  },
  defaultSubtitle: { // New style
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Lato-Regular',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    // color is now handled dynamically by useThemeColor({}, 'tint')
    fontFamily: 'Lato-Regular',
  },
  label: { // New style for smaller text, like input labels or captions
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Lato-Regular',
  }
});
