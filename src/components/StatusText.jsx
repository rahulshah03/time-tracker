import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

const StatusText = () => {
  return <Text style={styles.statusText}>No active tasks.</Text>;
};

export default StatusText;

const styles = StyleSheet.create({
  statusText: {
    fontSize: 18,
    fontFamily: "Avenir-Medium",
    textAlign: "center",
    marginVertical: 10,
    color: colors.gray,
  },
});
