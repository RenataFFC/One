import react from "react";
import { NavegationContainer} from "@react-navigator/native";
import { createNativeStackNagigator } from "@react-navigator/native-stack";

import Start from "../Pages/Start";

const Start = createNativeStackNavigator();

export default function AllPages() {
  return (
    <NavegationContainer>
      <Stack.Nagigator>
        screenOptions=
        {{
          headerShown: false,
        }}
        <Stack.Screen name="Start" componet={Start} />
      </Stack.Nagigator>
    </NavegationContainer>
  );
}
