import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Target() {
  const { navigate, back } = router;
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Target</Text>

      <Button
        title="Voltar"
        onPress={() => {
          back()
        }}
      />
    </View>
  );
}
