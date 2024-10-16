import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  useColorScheme,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
          <LoginButtons />
          <About />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function About() {
  return (
    <View style={styles.margin}>
      <Text style={styles.textBig}>About</Text>
      <View style={{ marginTop: 10 }}>
        <Pressable>
          <Text style={{ margin: 10, fontSize: 18 }}>Account</Text>
        </Pressable>
        <Pressable>
          <Text style={{ margin: 10, fontSize: 18 }}>Privacy Policy</Text>
        </Pressable>
        <Pressable>
          <Text style={{ margin: 10, fontSize: 18 }}>Terms of Service</Text>
        </Pressable>
        <Pressable>
          <Text style={{ margin: 10, fontSize: 18 }}>Licenses</Text>
        </Pressable>
      </View>
    </View>
  );
}

function LoginButtons() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
      />
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
      />
    </>
  );
}

function Header() {
  return (
    <View style={styles.topbar}>
      <Text style={styles.textBig}>Papers</Text>
      <Text>Sign in to save your data</Text>
    </View>
  );
}

function AuthButton({ label, icon }: { label: string; icon: any }) {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        backgroundColor: theme,
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        gap: 8,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "600",
  },
  topbar: {
    padding: 20,
  },
  themeSelectorContainer: {
    flex: 1,
  },
  themeSelectorChild: {},
  margin: {
    padding: 20,
  },
});
