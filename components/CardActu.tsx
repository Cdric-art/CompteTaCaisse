import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useFetch } from "use-http";
import { ExternalLink } from "./ExternalLink";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Article } from "@/constants/Article";

export function CardActu() {
  const url =
    "https://newsapi.org/v2/everything?q=(hôtellerie OR restaurant)&searchIn=title&pageSize=8&sortBy=publishedAt&domains=francetvinfo.fr,ouest-france.fr,marianne.net,lesechos.fr,konbini.com,leparisien.fr&apiKey=0c0a8b23304e4447ac47e0603e073e78";

  const { loading, data } = useFetch(url, {}, []);

  return (
    <View>
      {loading && <ActivityIndicator />}
      <ScrollView horizontal centerContent style={styles.card}>
        {data &&
          data.articles.map((art: Article, k: string) => (
            <ThemedView key={k} style={styles.cardContent}>
              <ThemedText style={styles.cardTitle}>{art.title}</ThemedText>
              <ThemedView style={styles.wrapperImgDesc}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: art.urlToImage }}
                  width={85}
                  height={85}
                />
                <ThemedText style={styles.cardDesc} type="defaultLight">
                  {art.description}
                </ThemedText>
              </ThemedView>
              <ExternalLink style={styles.cardLink} href={art.url}>
                Voir plus
              </ExternalLink>
            </ThemedView>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    maxWidth: 380,
    maxHeight: 165,
  },
  cardContent: {
    justifyContent: "center",
    width: 300,
    paddingHorizontal: 6,
    borderRadius: 16,
    backgroundColor: "#F2F1F6",
    marginRight: 18,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 6,
    paddingBottom: 6,
  },
  wrapperImgDesc: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F1F6",
    maxWidth: 280,
  },
  cardImage: {
    objectFit: "cover",
    marginRight: 6,
    borderRadius: 12,
  },
  cardDesc: {
    maxWidth: 190,
  },
  cardLink: {
    fontSize: 10,
    color: "#2B81E5",
    paddingTop: 6,
    paddingLeft: 6,
  },
});
