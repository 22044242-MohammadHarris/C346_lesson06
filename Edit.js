import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { datasource } from "./Data";

const Edit = ({ navigation, route }) => {
  const [letter, setLetter] = useState(route.params.key);

  return (
    <View>
      <Text>Letter:</Text>
      <TextInput
        value={letter}
        style={{ borderWidth: 1 }}
        onChangeText={(val) => setLetter(val)}
      />

      <View
        style={{
          //   backgroundColor: 'red',
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Button
          title={"save"}
          containerStyle={{ flex: 1, marginRight: 5 }}
          onPress={() => {
            let indexNum = 1;
            if (route.params.type == "Vowels") {
              indexNum = 0;
            } else if (route.params.type == "Consonants") {
              indexNum = 1;
            }
            datasource[indexNum].data[route.params.index].key = letter;
            navigation.navigate("home");
          }}
        />
        <Button
          title={"delete"}
          containerStyle={{ flex: 1, marginLeft: 5 }}
          onPress={() => {
            let indexNum = 1;
            if (route.params.type == "Vowels") {
              indexNum = 0;
            } else if (route.params.type == "Consonants") {
              indexNum = 1;
            }
            Alert.alert("Are you sure?", "", [
              {
                text: "Yes",
                onPress: () => {
                  datasource[indexNum].data.splice(route.params.index, 1);
                  navigation.navigate("home");
                },
              },
              {
                text: "No",

              },
            ]);
          }}
        />

        <Button
          title={"Back"}
          containerStyle={{ flex: 1, marginLeft: 5 }}
          onPress={() => navigation.navigate("home")}
        />
      </View>
      
      {/* 
      <Text>{letter}</Text>
      <Text>{JSON.stringify(route.params)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Edit;
