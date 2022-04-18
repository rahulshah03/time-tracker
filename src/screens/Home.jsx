import moment from "moment";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import Activity from "../components/Activity";
import AddButton from "../components/AddButton";
import Header from "../components/Header";
import StatusText from "../components/StatusText";
import TaskList from "../components/TaskList";
import colors from "../utils/colors";

import jsonServer from "../api/jsonServer";

const Home = ({ navigation, route }) => {
  const [activeTask, setActiveTask] = useState(route.params);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    if (route.params?.data) {
      setActiveTask(route.params.data);
    }

    const getPosts = async () => {
      try {
        const response = await jsonServer.get("/tasks");
        setAllTasks(response.data);
      } catch (error) {
        console.log("object");
        console.log(error);
      }
    };

    getPosts();
  }, [route.params?.data]);

  const onTaskComplete = async (task) => {
    await jsonServer.post("/tasks", task);
    const updatedTasks = [...allTasks];
    updatedTasks.push(task);
    setAllTasks(updatedTasks);
    setActiveTask(null);
  };

  const getDate = (d) => {
    return moment(d).format().split("-")[2].split("T")[0];
  };

  const getTodaysTasks = () => {
    const todaysDate = getDate(Date.now());
    const tasks = allTasks.filter((t) => todaysDate === getDate(t.date));
    tasks.reverse();
    return tasks;
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View>
          <Header />
          {activeTask ? (
            <Activity activeTask={activeTask} onTaskComplete={onTaskComplete} />
          ) : (
            <StatusText />
          )}
          <TaskList tasks={getTodaysTasks()} />
        </View>
      </ScrollView>

      <AddButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
});
