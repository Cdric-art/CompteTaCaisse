import { Image, StyleSheet, Text, View } from "react-native";

import { CardActu } from "@/components/CardActu";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useDate } from "@/hooks/useDate";
import { HomeBackground } from "@/components/HomeBackground";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <HomeBackground />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
        />
      </View>
      <ThemedText type="title" style={styles.title}>
        Compte ta caisse
      </ThemedText>
      <ThemedText
        style={styles.date}
      >{`${useDate().dayNumber} ${useDate().month} ${useDate().year}`}</ThemedText>
      <Text style={styles.heure}>
        {`${useDate().hours}:${useDate().minutes}`}
      </Text>
      <CardActu />
      <ThemedText style={styles.version} type="defaultLight">
        Version : 3.0
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 16,
    zIndex: 2,
  },
  logoContainer: {
    width: 170,
    height: 170,
    position: "relative",
    backgroundColor: "#F2F1F6",
    borderRadius: 90,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 10, height: 10 },
  },
  logo: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 150,
    height: 150,
  },
  title: {
    textAlign: "center",
    width: "50%",
    marginTop: 50,
  },
  date: {
    paddingTop: 20,
  },
  heure: {
    color: "#2B81E5",
  },
  version: {
    paddingVertical: 30,
  },
});
