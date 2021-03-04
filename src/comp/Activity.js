import React from "react";
import { ActivityIndicator, View } from "react-native";

const Activity = ({size}) => {
  return (
    <View style={styleSpinner.container}>
      <ActivityIndicator size={ size || "small"} color="red" />
    </View>

  );

};
 
const styleSpinner = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
}

export default Activity;