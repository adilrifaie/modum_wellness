# MODUM — Öğrenci Wellness Uygulaması

> Üniversite öğrencileri için duygu takibi, kişisel gelişim ve oyunlaştırılmış egzersiz deneyimi.

---

## Proje Hakkında

**MODUM**, üniversite öğrencilerinin ruhsal ve fiziksel iyilik halini takip etmelerine yardımcı olmak amacıyla geliştirilmiş bir mobil wellness uygulamasıdır. Öğrenciler günlük ruh hallerini kaydedebilir, egzersiz yaparak puan kazanabilir, kişisel iyilik önerileri alabilir ve ruhsal/fiziksel sağlıkları hakkında kısa quizler tamamlayabilir.

Proje, **YZM304 - Mobil Uygulama Geliştirme** dersi kapsamında React Native ve Expo kullanılarak geliştirilmiştir.

---

## Özellikler

### Ekranlar

| Ekran | Açıklama |
|---|---|
| **Giriş (Login)** | Öğrenci no, yaş ve cinsiyet bilgisi alınır; AsyncStorage'a kaydedilir |
| **Ana Sayfa** | 9 duygu butonu ile günlük ruh hali takibi yapılır |
| **İyi Oluş** | Ruhsal, fiziksel veya stres azaltma konularına yönlendirme |
| **Ruhsal Destek** | 7 konu başlığı; her biri 5 soruluk kişiselleştirilmiş quiz |
| **Fiziksel Destek** | 5 konu başlığı; her biri 5 soruluk kişiselleştirilmiş quiz |
| **Stres Azaltma** | YouTube üzerinden rehberli meditasyon ve uyku videoları |
| **Egzersiz** | Egzersiz yap, puan kazan; liderboard ile sıralamayı gör |
| **Profil** | Kayıtlı kullanıcı bilgileri, toplam egzersiz puanı ve çıkış |

### Oyunlaştırma

- **Puan Sistemi** — Her egzersiz tamamlandığında puan kazanılır (10 / 15 / 20 puan)
- **AsyncStorage Kalıcılığı** — Puanlar uygulama kapatılsa da korunur
- **Rozet Ödülü** — 50 puanı aşan kullanıcıya "Aktif Başlangıç" rozeti verilir
- **Liderboard** — Diğer kullanıcılarla puan karşılaştırması
- **Kutlama Mesajları** — Her egzersiz sonrası motivasyon bildirimi

### Quiz Sistemi

- **Yeniden Kullanılabilir QuizScreen** — `konu` ve `sorular` parametreleriyle her konuya uyum sağlar
- **5 Cevap Seçeneği** — Kesin Katılmıyor → Kesin Katılıyor (Likert ölçeği)
- **Progress Bar** — Sorular arasında ilerleme göstergesi
- **Sonuç Ekranı** — Puana göre İyi / Orta / Kötü değerlendirmesi

---

## Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|---|---|
| [React Native](https://reactnative.dev/) | Mobil uygulama çatısı |
| [Expo SDK 55](https://expo.dev/) | Geliştirme ortamı ve build |
| [React Navigation](https://reactnavigation.org/) | Native Stack + Bottom Tabs navigasyonu |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Yerel veri kalıcılığı |
| [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) | Mor-mavi gradient arka planlar |
| TypeScript | Tip güvenliği |

---

## Kurulum

### Gereksinimler

- Node.js >= 18
- npm
- Android Studio (Android için) ya da Xcode (iOS için)

### Adımlar

1. Repoyu klonla:

   ```sh
   git clone https://github.com/adilrifaie/modum_wellness.git
   cd modum
   ```

2. Bağımlılıkları yükle:

   ```sh
   npm install
   ```

3. Geliştirme sunucusunu başlat:

   ```sh
   npx expo start
   ```

4. Terminalde `a` ile Android emülatörde, `i` ile iOS simülatörde çalıştır.

> **Not:** Bu proje `expo-dev-client` kullandığından Expo Go ile çalışmaz.

---

## APK İndir

Uygulamayı doğrudan Android cihazına yüklemek için:

**[⬇ APK İndir (Expo Build)](https://expo.dev/accounts/nadilr/projects/modum/builds/ca09b3e3-66d1-4fcc-9056-6e40adc85937)**

---

## Tanıtım Videosu

**[▶ YouTube'da İzle](https://youtube.com/shorts/wRhn5pU_TgU?feature=share)**

---

## Proje Yapısı

```
modum/
├── src/
│   ├── navigation/
│   │   ├── index.tsx              # Navigator tanımları (RootStack + HomeTabs)
│   │   └── screens/
│   │       ├── Login.tsx          # Giriş ekranı
│   │       ├── Home.tsx           # Ana Sayfa — duygu takibi
│   │       ├── Settings.tsx       # İyi Oluş ekranı
│   │       ├── RuhsalScreen.tsx   # Ruhsal destek konu seçimi
│   │       ├── FizikselScreen.tsx # Fiziksel destek konu seçimi
│   │       ├── StresScreen.tsx    # Stres azaltma — YouTube yönlendirme
│   │       ├── QuizScreen.tsx     # Yeniden kullanılabilir quiz ekranı
│   │       ├── Updates.tsx        # Egzersiz & oyunlaştırma
│   │       └── Profile.tsx        # Profil ekranı
│   └── App.tsx
├── package.json
└── app.json
```

---

## KVKK Bildirimi

Bu uygulama, KVKK kapsamında yalnızca iyilik hali takibi amacıyla veri toplar. Toplanan veriler öğrenci numarası, yaş ve cinsiyetten ibarettir. Tüm veriler yalnızca cihaz üzerinde yerel olarak saklanır ve üçüncü taraflarla paylaşılmaz.

---
