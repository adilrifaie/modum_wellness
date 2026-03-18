import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function Login() {
  const navigation = useNavigation();
  const [ogrenciNo, setOgrenciNo] = useState('');
  const [yas, setYas] = useState('');
  const [cinsiyet, setCinsiyet] = useState<'Erkek' | 'Kadın' | null>(null);

  const handleLogin = async () => {
    if (!ogrenciNo.trim()) {
      Alert.alert('Eksik Bilgi', 'Lütfen öğrenci numaranı gir.');
      return;
    }
    if (!yas.trim() || isNaN(Number(yas))) {
      Alert.alert('Eksik Bilgi', 'Lütfen geçerli bir yaş gir.');
      return;
    }
    if (!cinsiyet) {
      Alert.alert('Eksik Bilgi', 'Lütfen cinsiyetini seç.');
      return;
    }

    await AsyncStorage.setItem('ogrenciNo', ogrenciNo.trim());
    await AsyncStorage.setItem('yas', yas.trim());
    await AsyncStorage.setItem('cinsiyet', cinsiyet);

    navigation.reset({ index: 0, routes: [{ name: 'HomeTabs' as never }] });
  };

  return (
    <LinearGradient colors={['#4A00E0', '#3B5BDB', '#7048E8']} style={styles.gradient}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {/* Logo */}
          <View style={styles.logoWrapper}>
            <Text style={styles.logoText}>MODUM</Text>
            <Text style={styles.logoTagline}>Öğrenci Wellness Uygulaması</Text>
          </View>

          {/* Form */}
          <View style={styles.card}>
            {/* Öğrenci No */}
            <Text style={styles.label}>Öğrenci No</Text>
            <TextInput
              style={styles.input}
              placeholder="örn. 2021123456"
              placeholderTextColor="rgba(255,255,255,0.4)"
              value={ogrenciNo}
              onChangeText={setOgrenciNo}
              keyboardType="number-pad"
              returnKeyType="next"
            />

            {/* Yaş */}
            <Text style={styles.label}>Yaş</Text>
            <TextInput
              style={styles.input}
              placeholder="örn. 21"
              placeholderTextColor="rgba(255,255,255,0.4)"
              value={yas}
              onChangeText={setYas}
              keyboardType="number-pad"
              returnKeyType="done"
            />

            {/* Cinsiyet Toggle */}
            <Text style={styles.label}>Cinsiyet</Text>
            <View style={styles.toggleRow}>
              {(['Erkek', 'Kadın'] as const).map((c) => (
                <TouchableOpacity
                  key={c}
                  style={[styles.toggleButton, cinsiyet === c && styles.toggleButtonActive]}
                  onPress={() => setCinsiyet(c)}
                  activeOpacity={0.75}
                >
                  <Text style={[styles.toggleText, cinsiyet === c && styles.toggleTextActive]}>
                    {c === 'Erkek' ? '👦 Erkek' : '👧 Kadın'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Giriş Butonu */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>

          {/* KVKK Notu */}
          <Text style={styles.kvkk}>
            Bu uygulama KVKK kapsamında yalnızca iyilik hali takibi amacıyla
            anonimleştirilmiş veriler toplar. Verileriniz üçüncü taraflarla paylaşılmaz.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    gap: 24,
  },
  logoWrapper: {
    alignItems: 'center',
    gap: 6,
  },
  logoText: {
    fontSize: 52,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 8,
  },
  logoTagline: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1,
    fontWeight: '500',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.13)',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.25)',
    padding: 24,
    gap: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderColor: '#FFFFFF',
  },
  toggleText: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.65)',
    fontWeight: '500',
  },
  toggleTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  loginButton: {
    marginTop: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#4A00E0',
    letterSpacing: 0.5,
  },
  kvkk: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    lineHeight: 17,
    paddingHorizontal: 8,
  },
});
