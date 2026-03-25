import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WELLNESS_OPTIONS = [
  {
    label: 'Ruhsal',
    emoji: '🧠',
    message:
      'Zihinsel sağlığın için her gün 5 dakika nefes egzersizi yap. Düşüncelerini bir günlüğe yazmak da zihnini boşaltmaya yardımcı olur.',
  },
  {
    label: 'Fiziksel',
    emoji: '🏃',
    message:
      'Haftada en az 3 gün 30 dakika yürüyüş yapmak kalp sağlığını ve enerji seviyeni artırır. Küçük adımlarla büyük değişimler yaratabilirsin!',
  },
  {
    label: 'Stres Azaltma',
    emoji: '🧘',
    message:
      'Günde 10 dakika meditasyon kortizol seviyeni düşürür. Derin nefes al, 4 say, tut, 4 say, ver — bunu 5 kez tekrarla ve farkı hisset.',
  },
];

export function Settings() {
  const navigation = useNavigation();

  const handlePress = (option: (typeof WELLNESS_OPTIONS)[0]) => {
    if (option.label === 'Ruhsal') {
      navigation.navigate('RuhsalScreen' as never);
      return;
    }
    if (option.label === 'Fiziksel') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (navigation as any).navigate('FizikselScreen');
      return;
    }
    if (option.label === 'Stres Azaltma') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (navigation as any).navigate('StresScreen');
      return;
    }
    Alert.alert(option.emoji + ' ' + option.label, option.message, [
      { text: 'Harika, teşekkürler!', style: 'default' },
    ]);
  };

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>İyi Oluş</Text>
        <Text style={styles.subtitle}>Ruhsal ya da fiziksel olarak{'\n'}daha iyi olmak ister misin?</Text>

        <View style={styles.buttonsWrapper}>
          {WELLNESS_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.button}
              onPress={() => handlePress(option)}
              activeOpacity={0.75}
            >
              <Text style={styles.buttonEmoji}>{option.emoji}</Text>
              <Text style={styles.buttonLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 17,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 12,
  },
  buttonsWrapper: {
    width: '100%',
    gap: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 18,
    paddingHorizontal: 28,
    gap: 16,
  },
  buttonEmoji: {
    fontSize: 34,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
});
