import { Wallpaper } from "@/hooks/useWallpapers";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function NewsCard({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable onPress={onPress}>
      <ThemedView style={styles.cardContainer}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: wallpaper.urlToImage,
          }}
        >
          <ThemedView style={styles.overlay}>
            <View style={styles.bookmark}>
              <Ionicons
                name={"bookmark"}
                size={20}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            </View>
            <ThemedText style={styles.title}>{wallpaper.title} </ThemedText>
            <ThemedText style={styles.desc}>{wallpaper.desc}</ThemedText>
            <ThemedText style={styles.seeMoreButton}>See More</ThemedText>
          </ThemedView>
        </ImageBackground>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    borderRadius: 8,
    overflow: "hidden", // Ensure the border radius applies to the image
  },
  bookmark: {
    position: "absolute",
    right: 10,
    top: 5,
    height: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    gap: 5,
  },
  image: {
    height: 150,
    width: "100%",
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 4,
  },
  desc: {
    color: "white",
    fontSize: 14,
  },
  seeMoreButton: {
    position: "absolute",
    backgroundColor: "#77CDFF",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderTopLeftRadius: 5,
    bottom: 0,
    fontWeight: "600",
    alignSelf: "flex-end",
    color: "white",
  },
});
