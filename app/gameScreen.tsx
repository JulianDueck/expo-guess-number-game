import { BackgroundView } from "@/components/BackgroundView";
import Card from "@/components/Card";
import GuessLogItem from "@/components/game/GuessLogItem";
import NumberContainer from "@/components/game/NumberContainer";
import InstructionText from "@/components/InstructionText";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View, useWindowDimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(this: any) {
  const { userNumber } = useLocalSearchParams();
  const chosenNumber = parseInt(userNumber?.toString() || "");
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      router.replace({
        pathname: "/gameOverScreen",
        params: {
          rounds: guessRounds.length,
          userNumber: chosenNumber,
        },
      });
    }
  }, [currentGuess, chosenNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "greater" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    return;
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
    </>
  );

  if (width > height) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
          <NumberContainer>{currentGuess}</NumberContainer>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </>
    );
  }

  return (
    <BackgroundView>
      <View style={styles.screen}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Title>Opponent's Guess</Title>
        {content}
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                round={guessRounds.length - itemData.index}
                guess={itemData.item.toString()}
              />
            )}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  instructionText: {
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
