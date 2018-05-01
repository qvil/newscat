import * as React from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import Loading from "./src/components/Loading";
import ArticleView from "./src/views/ArticleView";
// import Loading from "components/Loading"; // 실행은 되는데 error 떠서 밑에 typescript가 동작을 안 함.
import { getNews } from "./src/lib/news";

export default class App extends React.Component<{}> {
  state = {
    loading: true,
    articles: []
  };

  async componentDidMount() {
    await getNews()
      .then((response: any) => {
        this.setState({ articles: response.articles, loading: false });
      })
      .catch((error: any) => {
        this.setState({ loading: false });
        console.error(error);
      });
  }

  render() {
    const { loading, articles } = this.state;

    return (
      <Container>
        {loading ? (
          <Loading message="Loading..." />
        ) : (
          <ArticleView articles={articles} />
        )}
      </Container>
    );
  }
}
