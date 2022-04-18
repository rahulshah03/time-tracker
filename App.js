import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AddTask from "./src/screens/AddTask";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
