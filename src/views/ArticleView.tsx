import * as React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
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

export interface ArticleViewProps {
  articles: any;
}

export default class ArticleView extends React.Component<
  ArticleViewProps,
  any
> {
  render() {
    const { articles } = this.props;

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {articles.map((article: any, index: number) => (
              <Article key={index} {...article} />
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
