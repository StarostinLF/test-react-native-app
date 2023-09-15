// Система
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useState } from "react";

// Стили
import { appStyles } from "./app-styles";
import Header from "./components/header/header";

// Главная функция проекта
export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить ...", key: "1" },
    { text: "Помыть ...", key: "2" },
    { text: "Сделать ...", key: "3" },
  ]);

  return (
    <SafeAreaView style={appStyles.container}>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => <Text>{item.text}</Text>} />
      </View>
    </SafeAreaView>
  );
}
