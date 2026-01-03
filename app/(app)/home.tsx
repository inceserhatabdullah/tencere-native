import { Text } from '@/components/ui/Text';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tencere</Text>
      <Text>Malzemelerini yaz, ben tarif önereyim.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 12,
  },
});
