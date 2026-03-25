import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RouteParams = {
  konu: string;
  sorular: string[];
};

const OPTIONS = [
  { label: 'Kesin Katılmıyor', value: 1 },
  { label: 'Katılmıyor', value: 2 },
  { label: 'Kararsız', value: 3 },
  { label: 'Katılıyor', value: 4 },
  { label: 'Kesin Katılıyor', value: 5 },
];

export function QuizScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { konu, sorular } = route.params as RouteParams;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(sorular.length).fill(null));
  const [finished, setFinished] = useState(false);

  const totalScore = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const maxScore = sorular.length * 5;
  const scoreRatio = totalScore / maxScore;

  const getResult = () => {
    if (scoreRatio <= 0.4) return { label: 'İyi', emoji: '😊', desc: 'Bu alanda endişe verici bir durum görünmüyor. Kendine iyi bak!' };
    if (scoreRatio <= 0.65) return { label: 'Orta', emoji: '😐', desc: 'Bazı konulara dikkat etmeni öneririz. Destek almayı düşünebilirsin.' };
    return { label: 'Kötü', emoji: '😟', desc: 'Bu alanda profesyonel destek almak faydalı olabilir. Yalnız değilsin.' };
  };

  const handleSelect = (value: number) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < sorular.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  if (finished) {
    const result = getResult();
    return (
      <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultEmoji}>{result.emoji}</Text>
          <Text style={styles.resultTitle}>{konu} Sonucu</Text>
          <Text style={styles.resultLabel}>{result.label}</Text>
          <Text style={styles.resultDesc}>{result.desc}</Text>
          <Text style={styles.resultScore}>
            Toplam Puan: {totalScore} / {maxScore}
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  const progress = (currentIndex + 1) / sorular.length;

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Başlık */}
        <Text style={styles.konu}>{konu}</Text>

        {/* Progress Bar */}
        <View style={styles.progressWrapper}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {currentIndex + 1} / {sorular.length}
          </Text>
        </View>

        {/* Soru */}
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{sorular[currentIndex]}</Text>
        </View>

        {/* Seçenekler */}
        <View style={styles.optionsList}>
          {OPTIONS.map((opt) => {
            const selected = answers[currentIndex] === opt.value;
            return (
              <TouchableOpacity
                key={opt.value}
                style={[styles.optionButton, selected && styles.optionButtonSelected]}
                onPress={() => handleSelect(opt.value)}
                activeOpacity={0.75}
              >
                <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                  {opt.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Navigasyon Butonları */}
        <View style={styles.navRow}>
          <TouchableOpacity
            style={[styles.navButton, currentIndex === 0 && styles.navButtonDisabled]}
            onPress={handlePrev}
            disabled={currentIndex === 0}
            activeOpacity={0.75}
          >
            <Text style={styles.navButtonText}>← Önceki</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navButton, answers[currentIndex] === null && styles.navButtonDisabled]}
            onPress={handleNext}
            disabled={answers[currentIndex] === null}
            activeOpacity={0.75}
          >
            <Text style={styles.navButtonText}>
              {currentIndex === sorular.length - 1 ? 'Bitir ✓' : 'Sonraki →'}
            </Text>
          </TouchableOpacity>
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
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 22,
    gap: 16,
  },
  konu: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.4,
    alignSelf: 'flex-start',
  },
  progressWrapper: {
    width: '100%',
    gap: 6,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  progressText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    alignSelf: 'flex-end',
    fontWeight: '500',
  },
  questionCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    padding: 22,
    minHeight: 90,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 26,
    textAlign: 'center',
  },
  optionsList: {
    width: '100%',
    gap: 10,
  },
  optionButton: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.22)',
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: 'rgba(255,255,255,0.32)',
    borderColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
  },
  optionTextSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  navRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
    marginTop: 4,
  },
  navButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
  },
  navButtonDisabled: {
    opacity: 0.35,
  },
  navButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  // Sonuç ekranı
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 16,
  },
  resultEmoji: {
    fontSize: 72,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 0.3,
  },
  resultLabel: {
    fontSize: 42,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  resultDesc: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 24,
  },
  resultScore: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500',
  },
  backButton: {
    marginTop: 8,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#4A00E0',
  },
});
