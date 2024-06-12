import { BackgroundView } from "@/components/BackgroundView";
import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen(this: any) {
  const { userNumber } = useLocalSearchParams();
  const chosenNumber = parseInt(userNumber?.toString() || "");
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "greater" && currentGuess > chosenNumber)
    ) {
      return;
    }

    if (direction === "lower") {
      setCurrentGuess(generateRandomBetween(1, currentGuess, currentGuess));
    } else {
      setCurrentGuess(
        generateRandomBetween(currentGuess + 1, 100, currentGuess)
      );
    }
  };

  return (
    <BackgroundView>
      <View style={styles.screen}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
  },
});
