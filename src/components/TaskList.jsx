import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import moment from "moment";
import colors from "../utils/colors";
import { backgroundColorPallete } from "../utils/colors";

const TaskList = ({ tasks }) => {
  const formatTime = (t) => {
    return t < 10 ? `0${t}` : `${t}`;
  };

  const getTime = (duration) => {
    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration % 3600) / 60);
    const s = (duration % 3600) % 60;

    return `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
  };

  const getTasks = () => {
    return (
      <View>
        {tasks.map((t, i) => (
          <View
            key={i}
            style={[
              styles.taskContainer,
              { backgroundColor: backgroundColorPallete[i % 10] },
            ]}
          >
            <Text style={styles.time}>{moment(t.date).fromNow()}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{t.title}</Text>
              <Text style={styles.duration}>{getTime(t.duration)}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today</Text>
      {tasks.length === 0 ? (
        <Text style={styles.text}>It's all empty here.</Text>
      ) : (
        <View>{getTasks()}</View>
      )}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontFamily: "Avenir-Medium",
    fontWeight: "500",
    marginBottom: 15,
  },
  taskContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  time: {
    fontFamily: "Avenir-Medium",
    color: "#777",
    marginBottom: 2,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Avenir-Medium",
    fontSize: 18,
  },
  duration: {
    fontFamily: "Avenir-Medium",
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    fontFamily: "Avenir-Medium",
    textAlign: "center",
    marginVertical: 10,
    color: colors.gray,
  },
});
