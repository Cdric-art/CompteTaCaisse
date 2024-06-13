import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "defaultLight"
    | "subtitle"
    | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "defaultLight" ? styles.defaultLight : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Inter",
    fontSize: 16,
  },
  defaultLight: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 12,
  },
  defaultSemiBold: {
    fontFamily: "Inter",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
  },
  title: {
    fontFamily: "Inter",
    fontSize: 42,
    fontWeight: "900",
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: "bold",
  },
  link: {
    fontFamily: "Inter",
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
