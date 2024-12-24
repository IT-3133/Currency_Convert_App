import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Title, TextInput, Button, Card } from "react-native-paper";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencyType, setCurrencyType] = useState("USDtoLKR");
  const [showSelection, setShowSelection] = useState(false);

  const exchangeRates = {
    USD: 1,
    LKR: 294.5,
  };

  // Conversion handler
  const handleConvert = () => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid amount.");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title style={styles.titleText}>Currency Converter</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          label="Amount"
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Card
          style={styles.selectionCard}
          onPress={() => setShowSelection(!showSelection)}
        >
          <Text style={styles.selectionText}>
            {currencyType === "USDtoLKR"
              ? "Convert USD to LKR"
              : "Convert LKR to USD"}
          </Text>
        </Card>

        {showSelection && (
          <View style={styles.selectionOptions}>
            <Button
              mode="outlined"
              onPress={() => {
                setCurrencyType("USDtoLKR");
                setShowSelection(false);
              }}
            >
              Convert USD to LKR
            </Button>
            <Button
              mode="outlined"
              onPress={() => {
                setCurrencyType("LKRtoUSD");
                setShowSelection(false);
              }}
            >
              Convert LKR to USD
            </Button>
          </View>
        )}

        <Button mode="contained" onPress={handleConvert}>
          Convert
        </Button>

        {convertedAmount !== null && (
          <Text style={styles.convertedAmount}>
            Converted Amount: {convertedAmount}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  title: {
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
  },
  body: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 8,
    marginBottom: 7,
  },
  selectionCard: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  selectionText: {
    fontSize: 18,
    color: "#333",
  },
  selectionOptions: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  convertedAmount: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});
