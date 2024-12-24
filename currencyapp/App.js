import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { PaperProvider } from "react-native-paper";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <CurrencyConverter></CurrencyConverter>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
