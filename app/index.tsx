import { BackgroundView } from "@/components/BackgroundView";
import PrimaryButton from "@/components/PrimaryButton";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

export default function Index() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    router.push({
      pathname: "/gameScreen/[userNumber]",
      params: { userNumber: chosenNumber },
    });
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  return (
    <BackgroundView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          cursorColor={Colors.accent500}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 16,
    marginTop: 32,
    borderRadius: 8,
    elevation: 4, //android only shadow
    shadowColor: "black", //ios only shadow
    shadowOffset: { width: 0, height: 2 }, //ios only shadow
    shadowRadius: 6, //ios only shadow
    shadowOpacity: 0.25, //ios only shadow
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "80%",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
