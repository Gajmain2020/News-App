import { View, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { FlatList } from "react-native-gesture-handler";
import { Wallpaper } from "@/hooks/useWallpapers";
import NewsCard from "./NewsCard";
import { useState } from "react";
import DetailNews from "./BottomSheet";

export default function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedNews, setSelectedNews] = useState<null | Wallpaper>(null);

  return (
    <>
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
      {selectedNews && (
        <DetailNews
          wallpaper={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </>
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
