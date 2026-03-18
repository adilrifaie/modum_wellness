import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';

const HomeTabs = createBottomTabNavigator({
  screens: {
    AnaSayfa: {
      screen: Home,
      options: {
        title: 'Ana Sayfa',
        tabBarIcon: ({ color }: { color: string }) => (
          <Text style={{ fontSize: 20, color }}>🏠</Text>
        ),
      },
    },
    IyiOlus: {
      screen: Settings,
      options: {
        title: 'İyi Oluş',
        tabBarIcon: ({ color }: { color: string }) => (
          <Text style={{ fontSize: 20, color }}>✅</Text>
        ),
      },
    },
    Egzersiz: {
      screen: Updates,
      options: {
        title: 'Egzersiz',
        tabBarIcon: ({ color }: { color: string }) => (
          <Text style={{ fontSize: 20, color }}>💪</Text>
        ),
      },
    },
    Profil: {
      screen: Profile,
      options: {
        title: 'Profil',
        tabBarIcon: ({ color }: { color: string }) => (
          <Text style={{ fontSize: 20, color }}>👤</Text>
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: Login,
      options: { headerShown: false },
    },
    HomeTabs: {
      screen: HomeTabs,
      options: { headerShown: false },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}