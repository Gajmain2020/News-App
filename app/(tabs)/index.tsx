import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Saved" component={SettingsScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />
    </Tab.Navigator>
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
