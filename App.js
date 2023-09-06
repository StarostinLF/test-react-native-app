// Система
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

// Стили
import { appstyles } from "./app-styles";

// Компоненты
import TodoListComponent from "./components/todo-list/todo-list";

// Главная функция проекта
export default function App() {
  return (
    <SafeAreaView style={appstyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TodoListComponent />
    </SafeAreaView>
  );
}
