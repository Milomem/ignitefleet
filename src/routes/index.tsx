import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

import Toast from 'react-native-toast-message';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TopMessage } from "../components/topMessage";

export function Routes() {
  const insets = useSafeAreaInsets()

  return (
    <NavigationContainer>
      <AppRoutes />

      <Toast 
        config={{
          info: ({ text1 }) => <TopMessage title={String(text1)} />
        }}
        topOffset={insets.top}
      />
    </NavigationContainer>
  )
}