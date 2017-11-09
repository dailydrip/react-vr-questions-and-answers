import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";
import Questions from "./questions";

export default class MouseActions extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />
        <Questions />
      </View>
    );
  }
}

AppRegistry.registerComponent("MouseActions", () => MouseActions);
