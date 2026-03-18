import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const EMOTIONS = [
  { label: 'Neşeliyim', emoji: '😊' },
  { label: 'Üzgünüm', emoji: '😢' },
  { label: 'Kaygılıyım', emoji: '😟' },
  { label: 'Coşkuluyum', emoji: '🤩' },
  { label: 'Kızgınım', emoji: '😠' },
  { label: 'Şaşkınım', emoji: '😲' },
  { label: 'Tiksiniyorum', emoji: '🤢' },
  { label: 'Utanıyorum', emoji: '🙈' },
  { label: 'Korkuyorum', emoji: '😱' },
];

export function Home() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Bugün nasılsın?</Text>

        {selectedEmotion && (
          <Text style={styles.selectedText}>
            {EMOTIONS.find(e => e.label === selectedEmotion)?.emoji} {selectedEmotion}
          </Text>
        )}

        <View style={styles.grid}>
          {EMOTIONS.map((emotion) => {
            const isSelected = selectedEmotion === emotion.label;
            return (
              <TouchableOpacity
                key={emotion.label}
                style={[styles.button, isSelected && styles.buttonSelected]}
                onPress={() => setSelectedEmotion(emotion.label)}
                activeOpacity={0.75}
              >
                <Text style={styles.emoji}>{emotion.emoji}</Text>
                <Text style={[styles.buttonLabel, isSelected && styles.buttonLabelSelected]}>
                  {emotion.label}
                </Text>
              </TouchableOpacity>
            );
          })}
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
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  selectedText: {
    fontSize: 18,
    color: '#E0D7FF',
    marginBottom: 24,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 14,
    width: '100%',
  },
  button: {
    width: '28%',
    aspectRatio: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  buttonSelected: {
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderColor: '#FFFFFF',
  },
  emoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  buttonLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonLabelSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
