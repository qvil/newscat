import * as React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Thumbnail, Text, Body } from "native-base";

interface ArticleProps {
  thumbnailUri: string;
  title: string;
  description: string;
}

const Article: React.SFC<ArticleProps> = props => {
  const { thumbnailUri, title, description } = props;

  return (
    <ListItem>
      <Thumbnail square size={80} source={{ uri: thumbnailUri }} />
      <Body>
        <Text>{title}</Text>
        <Text note>{description}</Text>
      </Body>
    </ListItem>
  );
};

export default Article;
