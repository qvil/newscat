import * as React from "react";
import { StyleSheet } from "react-native";
import { Container, Text } from "native-base";

export interface LoadingProps {
  message: string;
}

export default class Loading extends React.Component<LoadingProps, any> {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });

  render() {
    const { message } = this.props;
    const { styles } = this;

    return (
      <Container style={styles.container}>
        <Text>{message}</Text>
      </Container>
    );
  }
}
