import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.MEMOtrip.app',
  appName: 'MEMOtrip',
  webDir: 'out',

    plugins: {
    Keyboard: {
      resize: "none"
    }
  }
};




export default config;
