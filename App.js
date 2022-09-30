import React from "react";
import { StyleSheet, View } from "react-native";
import Head from "./components/head";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabezera}>
        <Head />
      </View>
      <View style={styles.cuerpo}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  cabezera: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "grey",
    heidth: "100%",
    border:  "1px solid",
    borderColor: "red",  
    width: "100%" , 

  },
  cuerpo: {
    alignItems: "center",
    flex: 3,
    justifyContent: "center",
    heidth: "100%",
    width: "100%" , 

  },
});
