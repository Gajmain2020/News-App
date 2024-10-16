import SplitView from "@/components/SplitView";
import {
  useLibraryWallpaper,
  useSavedWallpapers,
  useSuggestedWallpapers,
  useWallpaper,
} from "@/hooks/useWallpapers";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Hello this Gajju</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={HomeScreen} />
        <Tab.Screen name="Saved" component={SavedPage} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function HomeScreen() {
  const wallpapers = useLibraryWallpaper();
  return (
    <View>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}
function SavedPage() {
  const wallpapers = useSavedWallpapers();
  return (
    <View>
      <SplitView wallpapers={wallpapers.reverse()} />
    </View>
  );
}
function SuggestedScreen() {
  const wallpapers = useSuggestedWallpapers();
  return (
    <View>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}
