import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextProps } from "react-native";

export default function InstructionText({ children, style }: TextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
