import { View } from "react-native";
import { router } from "expo-router";
import { HomeHeader } from "./components/HomeHeader";

// MARK: Ponto de entrada da aplicação
const summary = {
  input: { label: "Entradas", value: "R$ 1.000,00" },
  output: { label: "Saídas", value: "-R$ 500,00" },
  total: "R$ 500,00",
};

export default function Index() {
  const { navigate } = router;
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
    </View>
  );
}
