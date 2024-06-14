import { StyleSheet, Text, TextProps } from "react-native";

export default function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "space-mono",
    fontSize: 24,
    textAlign: "center",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    maxWidth: "80%",
  },
});
