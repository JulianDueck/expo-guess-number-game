import { BackgroundView } from "@/components/BackgroundView";
import Card from "@/components/Card";
import InstructionText from "@/components/InstructionText";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

export default function Index() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height } = useWindowDimensions();

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
      pathname: "/gameScreen",
      params: { userNumber: chosenNumber },
    });
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const marginTopDistance = height < 400 ? 20 : 100;

  return (
    <BackgroundView>
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <View style={[styles.title, { marginTop: marginTopDistance }]}>
            <Title>Guess My Number!</Title>
          </View>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
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
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    </BackgroundView>
  );
}

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    // marginTop: deviceHeight < 400 ? 20 : 40,
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
});
