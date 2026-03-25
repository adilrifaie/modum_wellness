import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const STRES_OPTIONS = [
  {
    label: 'Stresini Yönet',
    emoji: '🧘',
    url: 'https://www.youtube.com/results?search_query=stres+yonetimi',
  },
  {
    label: 'İyi Uyu',
    emoji: '😴',
    url: 'https://www.youtube.com/results?search_query=iyi+uyku+teknikleri',
  },
];

export function StresScreen() {
  const handlePress = (option: (typeof STRES_OPTIONS)[0]) => {
    Alert.alert(
      '🎬 YouTube\'a Yönlendirme',
      'YouTube uygulamasına yönlendiriliyorsunuz.',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Devam Et',
          onPress: () => Linking.openURL(option.url),
        },
      ]
    );
  };

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Hangi konuda{'\n'}stresini azaltmak istersin?</Text>

        <View style={styles.buttonsWrapper}>
          {STRES_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.button}
              onPress={() => handlePress(option)}
              activeOpacity={0.75}
            >
              <Text style={styles.buttonEmoji}>{option.emoji}</Text>
              <View style={styles.buttonTextWrapper}>
                <Text style={styles.buttonLabel}>{option.label}</Text>
                <Text style={styles.buttonSub}>YouTube'da izle ▶</Text>
              </View>
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
    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 36,
    letterSpacing: 0.3,
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
    paddingVertical: 22,
    paddingHorizontal: 28,
    gap: 16,
  },
  buttonEmoji: {
    fontSize: 38,
  },
  buttonTextWrapper: {
    gap: 4,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  buttonSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '400',
  },
});
