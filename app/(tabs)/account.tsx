import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  return (
    <SafeAreaView>
      <Text>account page</Text>
      <Link href={"/accountInfo"}>Account Information</Link>
    </SafeAreaView>
  );
}
