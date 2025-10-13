import {PageHeader} from "@/app/components/PageHeader";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Target() {
  const { navigate, back } = router;
  return (
    <View style={{flex: 1, paddingHorizontal: 24}}>
       <PageHeader
           title="Meta"
           subtitle="Economize para alcançar sua meta financeira"
       />
    </View>
  );
}
