import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={HomeScreen} />
        <Tab.Screen name="Saved" component={SettingsScreen} />
        <Tab.Screen name="Suggested" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Screen 1</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View>
      <Text>Screen 2</Text>
    </View>
  );
}
