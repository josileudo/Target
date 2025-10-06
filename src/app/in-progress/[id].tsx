import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  const { navigate, back } = router;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> In Progress</Text>
      <Text>Progress ID: {params.id} </Text>

      <Button onPress={() => back()} title="Voltar" />
    </View>
  );
}
