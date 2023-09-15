// Главные Стили
import { StyleSheet } from "react-native";
import { appStyles } from "../../app-styles";

export const listStyles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: appStyles.colorTheme.backgroundColor,
    marginTop: 20,
    marginLeft: "20%",
    width: "60%",
    backgroundColor: "#fafafa",
  },
});
