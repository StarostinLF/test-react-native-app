import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

import { mainstyles } from "./styles/main-styles";

import TodoListComponent from "./components/todo-list";

export default function App() {
  return (
    <SafeAreaView style={mainstyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TodoListComponent />
    </SafeAreaView>
  );
}
