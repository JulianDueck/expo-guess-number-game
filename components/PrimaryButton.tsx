import { Colors } from "@/constants/Colors";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

type PrimaryButtonProps = PressableProps & {
  children: React.ReactNode;
  style?: ViewProps;
};

export default function PrimaryButton({
  onPress,
  style,
  children,
}: PrimaryButtonProps) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 5,
    overflow: "hidden",
    flex: 1,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
