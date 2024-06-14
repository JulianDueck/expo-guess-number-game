import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet, View, ViewProps } from "react-native";

export default function Card({ children }: ViewProps) {
  return <View style={styles.card}>{children}</View>;
}

const devicedWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 16,
    marginTop: devicedWidth < 380 ? 12 : 36,
    borderRadius: 8,
    elevation: 4, //android only shadow
    shadowColor: "black", //ios only shadow
    shadowOffset: { width: 0, height: 2 }, //ios only shadow
    shadowRadius: 6, //ios only shadow
    shadowOpacity: 0.25, //ios only shadow
    alignItems: "center",
  },
});
