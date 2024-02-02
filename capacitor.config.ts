import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.orglobaltimer.app',
  appName: 'orglobaltimer',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
