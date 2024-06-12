import { StyleSheet, Text } from "react-native";

export default function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
});
