import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./src/components/Loading";
// import Loading from "components/Loading"; // 실행은 되는데 error 떠서 밑에 typescript가 동작을 안 함.

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/* <Loading message={() => 1} /> */}
        <Loading message="Loading" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
