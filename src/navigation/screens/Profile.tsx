import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ProfileData = {
  ogrenciNo: string | null;
  yas: string | null;
  cinsiyet: string | null;
};

export function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const ogrenciNo = await AsyncStorage.getItem('ogrenciNo');
    const yas = await AsyncStorage.getItem('yas');
    const cinsiyet = await AsyncStorage.getItem('cinsiyet');
    setProfile({ ogrenciNo, yas, cinsiyet });
    setLoading(false);
  };

  const handleLogout = () => {
    Alert.alert('Çıkış Yap', 'Hesabından çıkmak istediğinden emin misin?', [
      { text: 'İptal', style: 'cancel' },
      {
        text: 'Çıkış Yap',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.clear();
          setProfile({ ogrenciNo: null, yas: null, cinsiyet: null });
        },
      },
    ]);
  };

  const hasData = profile?.ogrenciNo || profile?.yas || profile?.cinsiyet;

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>👤</Text>
        </View>

        {/* Profil Bilgileri */}
        <View style={styles.card}>
          {loading ? (
            <Text style={styles.infoText}>Yükleniyor…</Text>
          ) : hasData ? (
            <>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Öğrenci No</Text>
                <Text style={styles.infoValue}>{profile?.ogrenciNo ?? '—'}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Yaş</Text>
                <Text style={styles.infoValue}>{profile?.yas ?? '—'}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Cinsiyet</Text>
                <Text style={styles.infoValue}>{profile?.cinsiyet ?? '—'}</Text>
              </View>
            </>
          ) : (
            <Text style={styles.emptyText}>Henüz giriş yapılmadı</Text>
          )}
        </View>

        {/* Egzersiz Puanı */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Toplam Egzersiz Puanı</Text>
          <Text style={styles.scoreValue}>0</Text>
        </View>

        {/* Çıkış Yap */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 24,
    gap: 20,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: 52,
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  infoLabel: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  infoText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 14,
  },
  emptyText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 18,
    fontStyle: 'italic',
  },
  scoreCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 18,
    alignItems: 'center',
    gap: 4,
  },
  scoreLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  scoreValue: {
    fontSize: 42,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 80, 80, 0.35)',
    borderWidth: 2,
    borderColor: 'rgba(255, 100, 100, 0.5)',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFB3B3',
  },
});
