import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import App from "./app/Components/App/App";
import MediaType from "./app/Components/MediaType/MediaType";
import TakePhoto from "./app/Components/Camera/Camera";
import DocUp from "./app/Components/DocUp/DocUp";
import Verify from "./app/Components/Verify/Verify";
import PhotoList from "./app/Components/PhotoList/PhotoList";

export default class DocSwap extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <App navigation={navigation} />
      </View>
    );
  }
}

const DocApp = StackNavigator({
  Home: { screen: App },
  MediaType: { screen: MediaType },
  TakePhoto: { screen: TakePhoto },
  Upload: { screen: DocUp },
  Verify: { screen: Verify },
  PhotoList: { screen: PhotoList }
});

AppRegistry.registerComponent("DocSwap", () => DocApp);
