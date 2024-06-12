import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function NumberContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
