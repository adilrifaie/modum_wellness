import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const EXERCISES = [
  { label: '10 Şınav', emoji: '💪', points: 10, celebration: 'Harika! Kolların güçleniyor! 💪' },
  { label: '20 Mekik', emoji: '🏋️', points: 20, celebration: 'Muhteşem! Karın kasların çalışıyor! 🔥' },
  { label: '5 dk Koşu', emoji: '🏃', points: 15, celebration: 'Süper! Kalbin sağlıklı kalıyor! ❤️' },
];

const LEADERBOARD = [
  { rank: 1, name: 'Ahmet K.', points: 340, emoji: '🥇' },
  { rank: 2, name: 'Selin Y.', points: 275, emoji: '🥈' },
  { rank: 3, name: 'Mert D.', points: 190, emoji: '🥉' },
];

export function Updates() {
  const [score, setScore] = useState(0);
  const [badgeShown, setBadgeShown] = useState(false);

  const handleExercise = (exercise: (typeof EXERCISES)[0]) => {
    const newScore = score + exercise.points;
    setScore(newScore);

    if (newScore > 50 && !badgeShown) {
      setBadgeShown(true);
      Alert.alert(
        '🏆 Rozet Kazandın!',
        `Tebrikler! 50 puanı aştın ve "Aktif Başlangıç" rozetini kazandın!\n\nToplam: ${newScore} puan`,
        [{ text: 'Yaşasın! 🎉', style: 'default' }]
      );
    } else {
      Alert.alert(exercise.emoji + ' ' + exercise.label, exercise.celebration, [
        { text: `+${exercise.points} puan! ✅`, style: 'default' },
      ]);
    }
  };

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Puan Sayacı */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Toplam Puanın</Text>
          <Text style={styles.scoreValue}>{score}</Text>
          <Text style={styles.scoreSubLabel}>puan</Text>
          {badgeShown && <Text style={styles.badge}>🏆 Rozet Kazandın!</Text>}
        </View>

        {/* Egzersiz Butonları */}
        <Text style={styles.sectionTitle}>Egzersiz Yap, Puan Kazan!</Text>
        <View style={styles.exercisesWrapper}>
          {EXERCISES.map((exercise) => (
            <TouchableOpacity
              key={exercise.label}
              style={styles.exerciseButton}
              onPress={() => handleExercise(exercise)}
              activeOpacity={0.75}
            >
              <Text style={styles.exerciseEmoji}>{exercise.emoji}</Text>
              <View style={styles.exerciseTextWrapper}>
                <Text style={styles.exerciseLabel}>{exercise.label}</Text>
                <Text style={styles.exercisePoints}>+{exercise.points} puan</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Liderboard */}
        <Text style={styles.sectionTitle}>Liderboard 🏅</Text>
        <View style={styles.leaderboardCard}>
          {LEADERBOARD.map((user) => (
            <View key={user.rank} style={styles.leaderRow}>
              <Text style={styles.leaderEmoji}>{user.emoji}</Text>
              <Text style={styles.leaderName}>{user.name}</Text>
              <Text style={styles.leaderPoints}>{user.points} puan</Text>
            </View>
          ))}
          <View style={[styles.leaderRow, styles.leaderRowSelf]}>
            <Text style={styles.leaderEmoji}>👤</Text>
            <Text style={[styles.leaderName, styles.selfText]}>Sen</Text>
            <Text style={[styles.leaderPoints, styles.selfText]}>{score} puan</Text>
          </View>
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
    paddingTop: 48,
    paddingBottom: 40,
    paddingHorizontal: 20,
    gap: 12,
  },
  scoreCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    paddingVertical: 28,
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 72,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 80,
  },
  scoreSubLabel: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  badge: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFD700',
    backgroundColor: 'rgba(255,215,0,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 4,
  },
  exercisesWrapper: {
    width: '100%',
    gap: 12,
  },
  exerciseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 14,
  },
  exerciseEmoji: {
    fontSize: 32,
  },
  exerciseTextWrapper: {
    flex: 1,
  },
  exerciseLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  exercisePoints: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
  },
  leaderboardCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 4,
  },
  leaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    gap: 12,
  },
  leaderRowSelf: {
    borderBottomWidth: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  leaderEmoji: {
    fontSize: 24,
    width: 32,
    textAlign: 'center',
  },
  leaderName: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  leaderPoints: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
  },
  selfText: {
    color: '#FFD700',
    fontWeight: '700',
  },
});
