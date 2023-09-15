// Система
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

// Стили
import { appstyles } from "./app-styles";

// Главная функция проекта
export default function App() {
  return (
    <SafeAreaView style={appstyles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
