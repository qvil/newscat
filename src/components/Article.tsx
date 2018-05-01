import * as React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Thumbnail, Text, Body } from "native-base";

interface ArticleProps {
  thumbnailUri: string;
  title: string;
  content: string;
}

const Article: React.SFC<ArticleProps> = props => {
  const { thumbnailUri, title, content } = props;

  return (
    <ListItem>
      <Thumbnail square size={80} source={{ uri: thumbnailUri }} />
      <Body>
        <Text>{title}</Text>
        <Text note>{content}</Text>
      </Body>
    </ListItem>
  );
};

export default Article;
