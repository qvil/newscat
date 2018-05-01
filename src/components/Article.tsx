import * as React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { ListItem, Thumbnail, Text, Body } from "native-base";

interface ArticleProps {
  source: {
    name: string;
  };
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
}

const Article: React.SFC<ArticleProps> = props => {
  const { source, urlToImage, title, description, publishedAt, url } = props;

  return (
    <ListItem>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Thumbnail square size={80} source={{ uri: urlToImage }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Body>
          <Text>{title}</Text>
          <Text note>{description}</Text>
          <Text note>{source.name}</Text>
          <Text note>{publishedAt}</Text>
        </Body>
      </TouchableOpacity>
    </ListItem>
  );
};

export default Article;
