import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import SubbmitButton from "../components/SubmitButton";

const AddTask = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [border, setBorder] = useState("#ececec");
  const [error, setError] = useState("");

  const onPress = () => {
    if (title.length === 0) {
      setError("Task name is required");
    } else {
      setError("");
      navigation.navigate("Home", {
        data: { title, time: 0 },
      });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        <Ionicons
          name="chevron-back"
          size={36}
          color={colors.dark}
          onPress={() => navigation.navigate("Home")}
        />
        <View>
          <Text style={styles.header}>Track your tasks.</Text>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Task name</Text>
            <TextInput
              style={[styles.input, { borderColor: border }]}
              placeholder="Add  your task."
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setTitle(text)}
              value={title}
              onFocus={() => setBorder(colors.gray)}
              onBlur={() => setBorder("#ececec")}
            />
            {error === "" ? null : <Text style={styles.error}>{error}</Text>}

            <SubbmitButton onPress={onPress} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  header: {
    fontFamily: "Avenir-Medium",
    fontSize: 28,
    marginTop: 20,
  },
  formContainer: {
    marginTop: 40,
  },
  label: {
    fontSize: 18,
    fontFamily: "Avenir-Medium",
    color: colors.dark,
  },
  input: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    fontFamily: "Avenir-Medium",
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: "#ececec",
    borderWidth: 0.5,
  },
  error: {
    color: "red",
    fontSize: 14,
    fontFamily: "Avenir-Medium",
    marginLeft: 20,
    marginTop: 5,
  },
});
