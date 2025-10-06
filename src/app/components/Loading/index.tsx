import {styles} from "./styles";
import { colors } from "@/theme/colors";
import { ActivityIndicator } from "react-native";

export default function Loading  ()  {
  return <ActivityIndicator color={colors.blue[500]} style={styles.container} />;
};
