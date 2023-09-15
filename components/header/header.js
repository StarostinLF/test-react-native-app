// Система
import { View, Text } from "react-native";

// Стили
import { headerStyles } from "./header-styles";

// Главная функция проекта
export default function Header() {
  return (
    <View style={headerStyles.background}>
      <Text style={headerStyles.text}>Список дел</Text>
    </View>
  );
}
