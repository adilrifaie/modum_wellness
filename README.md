# MODUM — Öğrenci Wellness Uygulaması

> Üniversite öğrencileri için duygu takibi, kişisel gelişim ve oyunlaştırılmış egzersiz deneyimi.

---

## Proje Hakkında

**MODUM**, üniversite öğrencilerinin ruhsal ve fiziksel iyilik halini takip etmelerine yardımcı olmak amacıyla geliştirilmiş bir mobil wellness uygulamasıdır. Öğrenciler günlük ruh hallerini kaydedebilir, egzersiz yaparak puan kazanabilir ve kişisel iyilik önerileri alabilir.

Proje, **YZM304 - Mobil Uygulama Geliştirme** dersi kapsamında React Native ve Expo kullanılarak geliştirilmiştir.

---

## Ekranlar ve Özellikler

| Ekran | Açıklama |
|---|---|
| **Giriş (Login)** | Öğrenci no, yaş ve cinsiyet bilgisi alınır; AsyncStorage'a kaydedilir |
| **Ana Sayfa** | 9 duygu butonu ile günlük ruh hali takibi yapılır |
| **İyi Oluş** | Ruhsal, fiziksel veya stres azaltma konularında bilgi kartları |
| **Egzersiz** | Egzersiz yap, puan kazan; liderboard ile sıralamayı gör |
| **Profil** | Kayıtlı kullanıcı bilgileri ve toplam egzersiz puanı görüntülenir |

---

## Oyunlaştırma Özellikleri

- **Puan Sistemi** — Her egzersiz tamamlandığında puan kazanılır (10 / 15 / 20 puan)
- **Rozet Ödülü** — 50 puanı aşan kullanıcıya "Aktif Başlangıç" rozeti verilir
- **Liderboard** — Diğer kullanıcılarla puan karşılaştırması yapılabilir
- **Kutlama Mesajları** — Her egzersiz sonrası motivasyon bildirimi gösterilir
- **Duygu Takibi** — Seçilen ruh hali kayıt altına alınır ve görsel olarak vurgulanır

---

## Kullanılan Teknolojiler

- [React Native](https://reactnative.dev/) `0.83`
- [Expo](https://expo.dev/) `SDK 55`
- [React Navigation](https://reactnavigation.org/) — Native Stack + Bottom Tabs
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) — Yerel veri saklama
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) — Gradient arka plan
- TypeScript

---

## Kurulum

### Gereksinimler

- Node.js >= 18
- npm veya yarn
- Android Studio (Android için) ya da Xcode (iOS için)
- Expo CLI

### Adımlar

1. Repoyu klonla:

   ```sh
   git clone https://github.com/adilrifaie/modum.git
   cd modum
   ```

2. Bağımlılıkları yükle:

   ```sh
   npm install
   ```

3. Geliştirme sunucusunu başlat:

   ```sh
   npm start
   ```

4. Terminalde `a` tuşuna basarak Android emülatörde, `i` ile iOS simülatörde çalıştır.

> **Not:** Bu proje `expo-dev-client` kullandığından Expo Go ile çalışmaz. Android/iOS build almak gerekir.

### Android Build (APK)

```sh
npm run android
```

veya EAS Build ile:

```sh
npx eas build -p android --profile preview
```

---

## APK İndir

> APK bağlantısı build tamamlandıktan sonra buraya eklenecektir.

**[⬇ APK İndir — yakında](#)**

---

## KVKK Bildirimi

Bu uygulama, KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında yalnızca iyilik hali takibi amacıyla anonimleştirilmiş veriler toplar. Toplanan veriler; öğrenci numarası, yaş ve cinsiyetten ibarettir. Bu veriler yalnızca cihaz üzerinde yerel olarak saklanır ve üçüncü taraflarla paylaşılmaz.

---

## Proje Yapısı

```
modum/
├── src/
│   ├── navigation/
│   │   ├── index.tsx          # Navigator tanımları
│   │   └── screens/
│   │       ├── Home.tsx       # Ana Sayfa — duygu takibi
│   │       ├── Settings.tsx   # İyi Oluş ekranı
│   │       ├── Updates.tsx    # Egzersiz & oyunlaştırma
│   │       ├── Profile.tsx    # Profil ekranı
│   │       └── Login.tsx      # Giriş ekranı
│   └── App.tsx
├── package.json
└── app.json
```

---