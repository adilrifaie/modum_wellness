import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SUPPORT_TOPICS = [
  {
    label: 'Anksiyete & Depresyon',
    emoji: '🧠',
    sorular: [
      'Kendimi çoğu zaman endişeli ve gergin hissediyorum.',
      'Günlük aktiviteler için motivasyon bulmakta zorlanıyorum.',
      'Uyku sorunları yaşıyor ya da çok fazla uyuyorum.',
      'Gelecek hakkında çoğunlukla karamsar düşüncelerim oluyor.',
      'Konsantrasyon güçlüğü çekiyor, işlere odaklanamıyorum.',
    ],
  },
  {
    label: 'Bağımlılık',
    emoji: '💊',
    sorular: [
      'Bir madde ya da davranışı bırakmak istesem de bırakamıyorum.',
      'Bu alışkanlık nedeniyle sosyal ilişkilerim zarar görüyor.',
      'Kullanmadığımda ya da yapamadığımda kendimi huzursuz hissediyorum.',
      'Aynı etkiyi almak için giderek daha fazlasına ihtiyaç duyuyorum.',
      'Bu alışkanlık okul ya da iş hayatımı olumsuz etkiliyor.',
    ],
  },
  {
    label: 'Partner Şiddeti',
    emoji: '💔',
    sorular: [
      'Partnerim zaman zaman beni küçük düşürücü sözler söylüyor.',
      'İlişkimde kendimi güvende hissetmediğim anlar oluyor.',
      'Partnerimin tepkisinden korktuğum için bazı şeyleri söyleyemiyorum.',
      'Fiziksel ya da duygusal olarak incitildiğimi hissettim.',
      'İlişki dışına çıkmakta ya da yardım istemekte zorlanıyorum.',
    ],
  },
  {
    label: 'Genel Sağlık',
    emoji: '❤️',
    sorular: [
      'Genel olarak kendimi sağlıklı ve enerjik hissediyorum.',
      'Düzenli egzersiz yapma konusunda zorluk yaşıyorum.',
      'Beslenme alışkanlıklarımdan memnun değilim.',
      'Stres nedeniyle bedenimde fiziksel belirtiler yaşıyorum.',
      'Düzenli sağlık kontrolü yaptırmayı ihmal ediyorum.',
    ],
  },
  {
    label: 'Yeme Bozukluğu',
    emoji: '🍽️',
    sorular: [
      'Yemek yeme konusunda kontrolümü kaybettiğimi hissediyorum.',
      'Vücut imajımdan dolayı kendimi kötü hissediyorum.',
      'Yemek sonrasında suçluluk ya da utanç duyuyorum.',
      'Aşırı yemek yeme ya da yemek yemekten kaçınma durumum var.',
      'Yeme alışkanlıklarım günlük yaşamımı olumsuz etkiliyor.',
    ],
  },
  {
    label: 'Uyku Bozukluğu',
    emoji: '😴',
    sorular: [
      'Uykuya dalmakta uzun süre zorlanıyorum.',
      'Gece sık sık uyanıyor, tekrar uyuyamıyorum.',
      'Sabah kalktığımda dinlenmiş hissetmiyorum.',
      'Gündüzleri aşırı yorgunluk ve uyku hali yaşıyorum.',
      'Uyku sorunlarım performansımı ve ruh halimi etkiliyor.',
    ],
  },
  {
    label: 'Diğer',
    emoji: '🔍',
    sorular: [
      'Kimseyle paylaşamadığım duygusal zorluklar yaşıyorum.',
      'Kendimi ifade etmekte güçlük çekiyorum.',
      'Sosyal ortamlarda kendimi yalnız ve anlaşılamamış hissediyorum.',
      'Destek almak istediğim bir konu olduğunda nereye başvuracağımı bilmiyorum.',
      'Genel olarak hayat kalitemi artırmak istiyorum.',
    ],
  },
];

export function RuhsalScreen() {
  const navigation = useNavigation();

  const handlePress = (topic: (typeof SUPPORT_TOPICS)[0]) => {
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
          {SUPPORT_TOPICS.map((topic) => (
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
