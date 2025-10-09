import {Button} from "@/app/components/Button";
import {List} from "@/app/components/List";
import { View } from "react-native";
import { router } from "expo-router";
import { HomeHeader } from "./components/HomeHeader";
import { Target } from "./components/Target";

// MARK: Ponto de entrada da aplicação
const summary = {
  input: { label: "Entradas", value: "R$ 1.000,00" },
  output: { label: "Saídas", value: "-R$ 500,00" },
  total: "R$ 500,00",
};

const targets = [
  {
    id: "1",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
  },
  {
    id: "2",
    name: "Comprar um novo notebook",
    percentage: "40%",
    current: "R$ 2.000,00",
    target: "R$ 5.000,00",
  },
];

export default function Index() {
  const { navigate } = router;
  return (
    <View style={{ flex: 1 }}>
        <HomeHeader data={summary} />
        <List
            title="Metas"
            data={targets}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Target data={item} onPress={() => navigate(`/in-progress/${item.id}`)} />
            )}
            emptyMessage="Nenhuma meta cadastrada. Cadastre suas metas!"
            containerStyle={{paddingHorizontal: 18}}
        />

        <View style={{padding: 24, paddingBottom: 32 }}>
            <Button title="Nova Meta" onPress={() => navigate("/target")}/>
        </View>
    </View>
  );
}
