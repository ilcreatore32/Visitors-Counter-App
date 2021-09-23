import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

/* Icons */
import add from "./assets/icons/plus.png";
import sub from "./assets/icons/sub.png";
import logo from "./assets/icons/logo.png";

export default function App() {
  const [Count, setCount] = useState(0);

  const [CountAdult, setCountAdult] = useState(0);
  const [CountTeen, setCountTeen] = useState(0);
  const [CountKid, setCountKid] = useState(0);
  const [CountElder, setCountElder] = useState(0);

  const addVisiters = () =>
    setCount(() => CountAdult + CountTeen + CountKid + CountElder);

  const addAdultVisiter = () => setCountAdult(CountAdult + 1);
  const addTeenVisiter = () => setCountTeen(CountTeen + 1);
  const addKidVisiter = () => setCountKid(CountKid + 1);
  const addElderVisiter = () => setCountElder(CountElder + 1);

  const subAdultVisiter = () =>
    setCountAdult(() => {
      if (CountAdult <= 0) {
        return CountAdult;
      } else {
        return CountAdult - 1;
      }
    });

  const subTeenVisiter = () =>
    setCountTeen(() => {
      if (CountTeen <= 0) {
        return CountTeen;
      } else {
        return CountTeen - 1;
      }
    });

  const subKidVisiter = () =>
    setCountKid(() => {
      if (CountKid <= 0) {
        return CountKid;
      } else {
        return CountKid - 1;
      }
    });

  const subElderVisiter = () =>
    setCountElder(() => {
      if (CountElder <= 0) {
        return CountElder;
      } else {
        return CountElder - 1;
      }
    });

  const Add = () => {
    return (
      <>
        <Image source={add} style={styles.add} />
      </>
    );
  };

  const Sub = () => {
    return (
      <>
        <Image source={sub} style={styles.sub} />
      </>
    );
  };

  useEffect(addVisiters);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.brand}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.brandText}>Contador de Visitantes</Text>
        </View>
        <Text style={styles.headerCount}>Visitantes Totales: {Count}</Text>
        <View style={styles.container}>
          <View style={styles.visiterInput}>
            <View style={styles.inputItems}>
              <Text style={styles.whiteText}>Adultos</Text>
              <Text style={styles.whiteText}>{CountAdult}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={addAdultVisiter}
              >
                <Add />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subButton}
                onPress={subAdultVisiter}
              >
                <Sub />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.visiterInput}>
            <View style={styles.inputItems}>
              <Text style={styles.whiteText}>Adolescentes</Text>
              <Text style={styles.whiteText}>{CountTeen}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={addTeenVisiter}
              >
                <Add />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subButton}
                onPress={subTeenVisiter}
              >
                <Sub />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.visiterInput}>
            <View style={styles.inputItems}>
              <Text style={styles.whiteText}>Niños</Text>
              <Text style={styles.whiteText}>{CountKid}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={addKidVisiter}
              >
                <Add />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subButton}
                onPress={subKidVisiter}
              >
                <Sub />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.visiterInput}>
            <View style={styles.inputItems}>
              <Text style={styles.whiteText}>Adultos Mayores</Text>
              <Text style={styles.whiteText}>{CountElder}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={addElderVisiter}
              >
                <Add />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subButton}
                onPress={subElderVisiter}
              >
                <Sub />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#303030",
    width: "100%",
  },
  whiteText: {
    color: "#fff",
  },
  brand: {
    width: "100%",
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "#fff",
    backgroundColor: "#0b2239",
    padding: 20,
    alignItems: "flex-end"
  },
  brandText: {
    fontSize: 25,
    color: "#43da90",
    marginLeft: 20,
  },
  headerCount: {
    padding: 20,
    fontSize: 20,
    backgroundColor: "#555555",
    width: "100%",
    color: "#fff",
  },
  visiterInput: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#424242",
    width: "100%",
    color: "#fff",
  },
  inputItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    gap: 15,
  },
  input: {
    width: 30,
    margin: 10,
    color: "#fff",
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#43da90",
    padding: 5,
    margin: 1,
    width: 30,
    borderRadius: 50,
  },
  subButton: {
    alignItems: "center",
    backgroundColor: "#ff3b45",
    padding: 5,
    margin: 1,
    width: 30,
    borderRadius: 50,
  },
  add: {
    width: 20,
    height: 20,
  },
  sub: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
});
