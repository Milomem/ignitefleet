import { SignIn } from './src/screens/signIn';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes';

import { ThemeProvider } from "styled-components/native";
import theme from './src/theme';

import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';

import { AppProvider, UserProvider } from '@realm/react';
import { REALM_APP_ID } from '@env';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (

    <AppProvider id={REALM_APP_ID}>
        <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent" 
            translucent 
          />
          <UserProvider fallback={SignIn}>
            <Routes />
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

