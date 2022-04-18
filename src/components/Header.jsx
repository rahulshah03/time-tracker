import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

const Header = () => {
  const getPeriod = () => {
    const currentHour = parseInt(moment().format().split("T")[1].split(":")[0]);
    if (currentHour >= 5 && currentHour <= 11) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour <= 16) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getPeriod()}, Rahul.</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    fontFamily: "Avenir-Medium",
    fontSize: 32,
    fontWeight: "600",
  },
});
