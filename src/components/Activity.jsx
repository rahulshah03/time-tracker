import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";

const Activity = ({ activeTask: { title, time }, onTaskComplete }) => {
  const [duration, setDuration] = useState(time);
  const [isActive, setIsActive] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setDuration((duration) => duration + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [duration, isActive]);

  const formatTime = (t) => {
    return t < 10 ? `0${t}` : `${t}`;
  };

  const getTime = () => {
    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration % 3600) / 60);
    const s = (duration % 3600) % 60;

    return `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{getTime()}</Text>
        <View style={styles.buttonContainer}>
          <Ionicons
            name={isActive ? "md-pause-circle" : "ios-play-circle"}
            size={48}
            color={colors.light}
            onPress={() => {
              setIsActive((prevState) => !prevState);
              setDate(Date.now());
            }}
          />
          {duration > 0 && (
            <Ionicons
              name="ios-checkmark-circle"
              size={48}
              color={colors.light}
              onPress={() =>
                onTaskComplete({ title, duration, date: Date.now() })
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#005F73",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  timeContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    fontWeight: "bold",
    color: colors.light,
  },
  time: {
    fontSize: 24,
    fontFamily: "Avenir-Medium",
    color: colors.light,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
