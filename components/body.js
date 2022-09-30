import { Text, View, StyleSheet } from "react-native";

const body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Mi nombre es Alberto Balagué Padrón, actualmente soy un alumno de los Salesianos
        La Cuesta. Me gusta saber de todo soy muy curioso aparte tambien me gusta jugar.
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "76%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  texto: {
    alignSelf: "center",
    fontSize: 13,
  },
});

export default body;
