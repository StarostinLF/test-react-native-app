// Система
import { View, Text } from "react-native";

// Стили
import { headersStyles } from "./header-styles";

// Главная функция проекта
export default function Header() {
  return (
    <View style={headerStyles.main}>
      <Text style={headerStyles.text}>Список дел</Text>
    </View>
  );
}
