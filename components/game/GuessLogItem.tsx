import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function GuessLogItem({
  guess,
  round,
}: {
  guess: string;
  round: number;
}) {
  return (
    <View style={styles.guessLogItem}>
      <Text>#{round}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessLogItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    padding: 16,
    borderRadius: 40,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
});
