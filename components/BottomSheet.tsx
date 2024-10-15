import React, { useCallback, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  Text,
  Linking,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";

export default function DetailNews({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["90%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: wallpaper.url }} />
          <View style={styles.topbar}>
            <Ionicons
              onPress={onClose}
              name={"close"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.text}
            />
            <View style={styles.topbarInner}>
              <Ionicons
                name={"bookmark"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.text}
              />
              <Ionicons
                name={"share"}
                size={24}
                color={theme === "light" ? Colors.light.icon : Colors.dark.text}
                style={{ paddingLeft: 4 }}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{wallpaper.title}</Text>
            <Text style={styles.desc}>
              {wallpaper.desc}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
              veritatis quibusdam. Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Deleniti dolorum illum
              accusantium molestiae sequi iste sapiente. Labore, in nobis.
              Aspernatur inventore laborum doloribus maxime itaque esse,
              molestias quasi sapiente non. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum, eligendi quasi. Porro aut
              placeat temporibus, non ipsa illo ut perferendis maiores minus?
              Dignissimos odit nihil nisi omnis ab nostrum dicta? Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Sit animi veritatis
            </Text>
            <View style={styles.viewNewsButton}>
              <Text onPress={() => Linking.openURL(wallpaper.url)}>
                View News
              </Text>
            </View>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  image: {
    height: 250,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: "cover",
  },
  topbar: {
    position: "absolute",
    top: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  topbarInner: {
    flexDirection: "row",
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexGrow: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  desc: {
    marginVertical: 10,
    fontSize: 16,
  },
  viewNewsButton: {
    alignSelf: "flex-end",
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    fontWeight: "700",
  },
});
