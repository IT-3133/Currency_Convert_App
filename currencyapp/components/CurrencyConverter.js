import { View, Text, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

export default function CurrencyConverter() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Currency Converter</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
