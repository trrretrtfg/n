import OneSignal from 'react-native-onesignal';
import Constants from 'expo-constants';

export function initializeOneSignal() {
  const appId = Constants.expoConfig?.extra?.oneSignalAppId;
  if (!appId) return;
  OneSignal.initialize(appId);
}