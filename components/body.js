import SvgQRCode from "react-native-qrcode-svg";
import { Text, View, StyleSheet } from "react-native";

const body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Mi nombre es Alberto Balagué Padrón, actualmente soy un alumno de los
        Salesianos La Cuesta. {"\n"}
        Me gusta invertir tiempo en cosas que me gustas como escuchar música,
        leer libros y hacer deporte. También paso mi tiempo en familia y con mis
        gatos.
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
    justifyContent: "space-evenly",
  },

  texto: {
    alignSelf: "center",
    fontSize: 13,
  },
});

export default body;
