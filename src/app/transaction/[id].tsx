import { Button, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();
  const { back } = router;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transaction</Text>
      <Text>ID: {params.id} </Text>

      <Button title="Voltar" onPress={() => back()} />
    </View>
  );
}
