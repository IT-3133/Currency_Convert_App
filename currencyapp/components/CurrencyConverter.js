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
    if (currencyType === "USDtoLKR") {
      const converted = numericAmount * exchangeRates.LKR;
      setConvertedAmount(converted.toFixed(2));
    } else if (currencyType === "LKRtoUSD") {
      const converted = numericAmount / exchangeRates.LKR;
      setConvertedAmount(converted.toFixed(2));
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
    backgroundColor: "#F9F9F9",
  },
  title: {
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#6200EE",
    marginBottom: 20,
  },
  body: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#F1F1F1",
  },
  selectionCard: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: "#EDE7F6",
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  selectionText: {
    fontSize: 18,
    color: "#6200EE",
    fontWeight: "500",
  },
  selectionOptions: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  button: {
    marginBottom: 10,
    width: "80%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#6200EE",
    borderColor: "#6200EE",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  convertButton: {
    marginTop: 20,
    width: "80%",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#6200EE",
    borderColor: "#6200EE",
  },
  convertedAmount: {
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "600",
    color: "#6200EE",
  },
});
