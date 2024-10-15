import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(noBottomBar)/accountInfo"
          options={{
            headerShown: true,
            headerTitle: "Account Info",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
