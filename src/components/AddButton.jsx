import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const AddButton = ({ navigation }) => {
  return (
    <TouchableHighlight
      underlayColor="#005F73"
      style={styles.container}
      onPress={() => navigation.navigate("Add")}
    >
      <View>
        <MaterialIcons name="add" size={60} color={colors.light} />
      </View>
    </TouchableHighlight>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 70,
    right: 30,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
