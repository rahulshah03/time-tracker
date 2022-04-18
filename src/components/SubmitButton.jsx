import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../utils/colors";

const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Track</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    backgroundColor: "#005F73",
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    fontFamily: "Avenir-Medium",
  },
});
