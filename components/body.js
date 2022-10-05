import SvgQRCode from "react-native-qrcode-svg";
import { Text, View, StyleSheet } from "react-native";

const body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Mi nombre es Alberto Balagué Padrón, actualmente soy un alumno de los
        Salesianos La Cuesta. Me gusta saber de todo soy muy curioso aparte
        tambien me gusta jugar.
      </Text>
      <SvgQRCode
        value="https://github.com/AlbertoBalaguePadron/Practica01Layouts/tree/main"
        style={styles.qr}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
