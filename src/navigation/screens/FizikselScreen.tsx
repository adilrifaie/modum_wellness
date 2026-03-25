import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PHYSICAL_TOPICS = [
  {
    label: 'Sağlık',
    emoji: '❤️',
    sorular: [
      'Son zamanlarda kendimi fiziksel olarak sağlıklı hissediyorum.',
      'Düzenli sağlık kontrollerime gidiyorum.',
      'Herhangi bir kronik rahatsızlığım günlük hayatımı etkiliyor.',
      'Hastalandığımda profesyonel yardım almakta zorlanıyorum.',
      'Bağışıklık sistemimin zayıf olduğunu düşünüyorum.',
    ],
  },
  {
    label: 'Uyku',
    emoji: '😴',
    sorular: [
      'Her gece düzenli ve yeterli süre uyuyabiliyorum.',
      'Uykuya dalmadan önce uzun süre yatakta bekliyorum.',
      'Gece boyunca sık sık uyanıp tekrar uyumakta güçlük çekiyorum.',
      'Sabah kalktığımda dinlenmiş ve enerjik hissediyorum.',
      'Uyku sorunlarım gün içindeki performansımı olumsuz etkiliyor.',
    ],
  },
  {
    label: 'Beslenme',
    emoji: '🍽️',
    sorular: [
      'Günlük besin ihtiyacımı düzenli öğünlerle karşılıyorum.',
      'Sağlıksız atıştırmalıkları sık sık tüketiyorum.',
      'Yeterli su içtiğimi düşünüyorum.',
      'Beslenme alışkanlıklarımdan genel olarak memnunum.',
      'Stres ya da duygusal durumum yeme alışkanlıklarımı etkiliyor.',
    ],
  },
  {
    label: 'Boy-Kilo',
    emoji: '⚖️',
    sorular: [
      'Mevcut kilom ve boyumla genel olarak barışığım.',
      'Kilo konusunda kendime baskı uyguladığımı hissediyorum.',
      'Vücut ağırlığım son zamanlarda belirgin biçimde değişti.',
      'Kilo yönetimi için sağlıklı yöntemler uygulamaya çalışıyorum.',
      'Beden imajım özgüvenimi olumsuz etkiliyor.',
    ],
  },
  {
    label: 'Egzersiz',
    emoji: '💪',
    sorular: [
      'Haftada en az 3 gün düzenli egzersiz yapıyorum.',
      'Egzersiz yapmak için zaman bulmakta zorlanıyorum.',
      'Fiziksel aktivite sonrasında kendimi daha iyi hissediyorum.',
      'Sedanter bir yaşam tarzının sağlığımı etkilediğini düşünüyorum.',
      'Egzersiz rutinime bağlı kalmakta güçlük çekiyorum.',
    ],
  },
];

export function FizikselScreen() {
  const navigation = useNavigation();

  const handlePress = (topic: (typeof PHYSICAL_TOPICS)[0]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigation as any).navigate('QuizScreen', {
      konu: topic.label,
      sorular: topic.sorular,
    });
  };

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Hangi konuda{'\n'}destek almak istersin?</Text>

        <View style={styles.list}>
          {PHYSICAL_TOPICS.map((topic) => (
            <TouchableOpacity
              key={topic.label}
              style={styles.button}
              onPress={() => handlePress(topic)}
              activeOpacity={0.75}
            >
              <Text style={styles.buttonEmoji}>{topic.emoji}</Text>
              <Text style={styles.buttonLabel}>{topic.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 56,
    paddingBottom: 40,
    paddingHorizontal: 24,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  list: {
    width: '100%',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 18,
    paddingHorizontal: 24,
    gap: 16,
  },
  buttonEmoji: {
    fontSize: 28,
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
});
