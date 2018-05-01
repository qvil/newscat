import * as React from "react";
import { StyleSheet } from "react-native";
import { Container, Header } from "native-base";
import Loading from "./src/components/Loading";
import ArticleView from "./src/views/ArticleView";
// import Loading from "components/Loading"; // 실행은 되는데 error 떠서 밑에 typescript가 동작을 안 함.

export default class App extends React.Component<{}> {
  state = {
    loading: false
  };

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {/* <Container style={styles.container}> */}
        <Header />
        {loading ? <Loading message="Loading..." /> : <ArticleView />}
      </Container>
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
