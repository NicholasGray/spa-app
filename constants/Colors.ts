/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primaryLight = '#003366'; // Deep Blue
const primaryDark = '#ADD8E6';  // Lighter Blue for dark mode text/tint

const secondaryLight = '#FFD700'; // Gold
const secondaryDark = '#FFB300';  // Darker Gold for dark mode

const accentLight = '#D32F2F'; // Red
const accentDark = '#E57373';   // Lighter Red for dark mode

export const Colors = {
  light: {
    text: '#1D232A', // Darker grey
    background: '#F4F6F8', // Light grey
    tint: primaryLight,
    icon: '#4A5568', // Mid-grey for icons
    tabIconDefault: '#A0AEC0', // Lighter grey for inactive tabs
    tabIconSelected: primaryLight,
    primary: primaryLight,
    secondary: secondaryLight,
    accent: accentLight,
    placeholder: '#A0AEC0', // For input placeholders or subtle text
    card: '#FFFFFF', // Card background
    borderColor: '#E2E8F0', // Border color
  },
  dark: {
    text: '#E5E7EB', // Light grey
    background: '#1A1D21', // Very dark desaturated blue/grey
    tint: primaryDark,
    icon: '#A0AEC0', // Light grey for icons
    tabIconDefault: '#718096', // Mid-grey for inactive tabs
    tabIconSelected: primaryDark,
    primary: primaryDark,
    secondary: secondaryDark,
    accent: accentDark,
    placeholder: '#718096', // For input placeholders or subtle text
    card: '#2D3748', // Dark card background
    borderColor: '#4A5568', // Border color
  },
};
