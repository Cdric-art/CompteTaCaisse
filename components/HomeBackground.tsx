import { StyleSheet, View } from "react-native";

export function HomeBackground() {
  const randomColor = (): string => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
      <View style={[styles.fill, { backgroundColor: randomColor() }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "flex-start",
    gap: 25,
    top: 70,
    left: 0,
    right: 0,
  },
  fill: {
    height: 1,
    width: "100%",
    transform: [{ rotate: "-30deg" }, { scale: 2 }],
  },
});
