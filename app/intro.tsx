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
      <Text>Tencere</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
