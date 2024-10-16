import DetailNews from "@/components/BottomSheet";
import NewsCard from "@/components/NewsCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpapers";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, Image, LogBox, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// this is a dumb error which i tried to rectify but is not
// If you try and head up to a bump over your head that i could not do this as well
//  just increase the counter below by how much time you spent on the error
// Hours_spent = 2

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested", // the exact warning message
]);

export default function Explore() {
  const wallpapers = useWallpaper();

  const [selectedNews, setSelectedNews] = useState<null | Wallpaper>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E=",
              }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.9)",
              ]}
              style={StyleSheet.absoluteFillObject} // covers the entire image
            />
          </View>
        }
      >
        <FlatList
          data={wallpapers}
          renderItem={({ item }) => (
            <View style={styles.cardSpacing}>
              <NewsCard
                onPress={() => {
                  setSelectedNews(item);
                }}
                wallpaper={item}
              />
            </View>
          )}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </ParallaxScrollView>
      {selectedNews && (
        <DetailNews
          wallpaper={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
  },
  listContainer: {
    paddingHorizontal: 2,
  },
  cardSpacing: {
    marginVertical: 2,
  },
  separator: {
    height: 5,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300, // Adjust the height as needed
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
