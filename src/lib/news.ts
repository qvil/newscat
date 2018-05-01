import * as config from "../../config/config.json";
// import config from "../../config/config.json";

export async function getNews() {
  const apiKey = (<any>config).apiKey;
  const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`;

  return (await fetch(url)).json();
}
