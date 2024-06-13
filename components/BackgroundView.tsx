import { ImageBackground, StyleSheet, ViewProps } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export function BackgroundView({ children }: ViewProps) {
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
