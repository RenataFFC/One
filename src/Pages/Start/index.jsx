import React from "react";
import { ScrollView , View , Text , Image } from "react-native";

export default function Start(){
  
return(
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
           <View> 
              <Image source ={ require("../../assets/icons/logo3.png")}
            />
           <Text>
                Vamos transformar sua vida {"\n"} em um jogo, buscando {"\n"}{" "}
                o melhor nível.
          </Text>      
         </View>
       </ScrollView>
</View>)
}


