import DetailNews from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function expolre() {
  const [newsOpen, setNewsOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>explore page</Text>
        <Button
          title="Open bottom sheet"
          onPress={() => {
            setNewsOpen(true);
          }}
        ></Button>
        {newsOpen && <DetailNews onClose={() => setNewsOpen(false)} />}
      </View>
    </SafeAreaView>
  );
}
