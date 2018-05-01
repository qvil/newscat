import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body
} from "native-base";
import Article from "../components/Article";
import { getNews } from "../lib/news";

export interface ArticleViewProps {}

export default class ArticleView extends React.Component<
  ArticleViewProps,
  any
> {
  styles = StyleSheet.create({
    container: {
      // backgroundColor: "pink"
    }
  });

  state = {
    articles: []
  };

  async componentDidMount() {
    await getNews()
      .then(response => this.setState({ articles: response.articles }))
      .catch(error => console.error(error));
  }

  render() {
    const { styles } = this;
    const { articles } = this.state;

    return (
      // <Container>
      <Container style={styles.container}>
        <Content>
          <List>
            {articles.map((article: any, index: number) => (
              <Article
                key={index}
                thumbnailUri={article.urlToImage}
                title={article.title}
                description={article.description}
              />
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
