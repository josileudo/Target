import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Target() {
  const { navigate } = router;
  return (
    <View>
      <Text>Target</Text>

      <Button
        title="Ir para Home"
        onPress={() => {
          navigate("/");
        }}
      />
    </View>
  );
}
