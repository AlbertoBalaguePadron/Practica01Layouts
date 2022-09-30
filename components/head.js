import { Text, View, StyleSheet, Image } from "react-native";

const head = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={require("../assets/Albert.png")} />
      <Text style={styles.texto}>Alberto Balagué Padrón </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  foto: {
    width: 70,
    height: 70,
    borderRadius: 90,
  },
  texto: {
    alignSelf: "center",
    fontSize: 18,
    color: "#fff",
  },
});

export default head;
