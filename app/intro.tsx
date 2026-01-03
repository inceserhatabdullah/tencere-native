import { Text } from '@/components/ui/Text';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

export default function IntroScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/(app)/home');
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/tencere.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.brand}>Tencere</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAF8'
  },
  lottie: {
    width: 300,
    height: 300,
    marginBottom: 24,
  },
  brand: {
    fontFamily: 'google-sans',
    fontSize: 32,
    letterSpacing: 1.2,
    color: '#1A1A1A',
    position: 'absolute',
    bottom: 50
  },
});
