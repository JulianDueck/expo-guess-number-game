import { BackgroundView } from "@/components/BackgroundView";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { Colors } from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function GameOverScreen() {
  const { rounds, userNumber } = useLocalSearchParams();

  const newGameHandler = () => {
    router.replace("/");
  };

  return (
    <BackgroundView>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 24 }}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
          rounds to guess number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton style={{ flex: 0 }} onPress={newGameHandler}>
            Start New Game
          </PrimaryButton>
        </View>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
