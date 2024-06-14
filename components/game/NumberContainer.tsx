import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextProps, View, Dimensions } from "react-native";

export default function NumberContainer({ children }: TextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const devicedWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: devicedWidth < 380 ? 12 : 24,
    margin: devicedWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: devicedWidth < 380 ? 28 : 36,
    fontWeight: "bold",
  },
});
