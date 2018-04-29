import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface LoadingProps {
  message: string;
}

export default class Loading extends React.Component<LoadingProps, any> {
  render() {
    const { message } = this.props;

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }
}
