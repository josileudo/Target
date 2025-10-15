import { PageHeader } from "@/app/components/PageHeader";
import { View } from "react-native";
import { router } from "expo-router";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export default function Target() {
  const { navigate, back } = router;
  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
      />

      <View style={{ marginTop: 22, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
        />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
