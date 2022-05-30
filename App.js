import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  requireNativeComponent,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("USA");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.menu}>
            <Pressable onPress={() => alert("menu will added soon")}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("./src/images/menu.png")}
              />
            </Pressable>
            <Pressable onPress={() => alert("notification bell pressed")}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("./src/images/bell.png")}
              />
            </Pressable>
          </View>
          <View style={styles.secHeader}>
            <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>
              Covid 19
            </Text>
            <View
              style={{
                width: 130,
                margin: 0,
                padding: 0,
                justifyContent: "center",
                alignItems: "flex-end",
                borderRadius:30,
                backgroundColor:"white",
                height:35
              }}
            >
              <Picker
                style={styles.defaultPicker}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Bangladesh" value="Bangladesh" />
                <Picker.Item label="UK" value="UK" />
                <Picker.Item label="USA" value="USA" />
              </Picker>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Are you feeling sick?</Text>
            <Text style={styles.para}>
              If you feel sick with any of covid-19 symptoms please call or SMS
              us immediately for help.
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              marginTop: 15,
              flexDirection: "row",
            }}
          >
            <Pressable
              style={styles.callBtn}
              onPress={() => alert("call now button pressed")}
            >
              <Image
                style={{
                  height: 15,
                  width: 15,
                  marginRight: 7,
                }}
                source={require("./src/images/call.png")}
              />
              <Text>Call Now</Text>
            </Pressable>
            <Pressable
              style={styles.smsBtn}
              onPress={() => alert("send SMS button pressed")}
            >
              <Image
                style={{ height: 15, width: 15, marginRight: 7 }}
                source={require("./src/images/sms.png")}
              />
              <Text>Send SMS</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={{ marginVertical: 15, fontSize: 22 }}>Prevention</Text>
          <View style={styles.prevent}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{
                  height: 80,
                  width: 80,
                  marginRight: 7,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={require("./src/images/feet.png")}
              />
              <Text style={{ textAlign: "center", fontSize: 15, marginTop: 5 }}>
                Avoid close {"\n"} contact
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{ height: 80, width: 80, marginRight: 7 }}
                source={require("./src/images/hand.png")}
              />
              <Text style={{ textAlign: "center", fontSize: 15, marginTop: 5 }}>
                Clean your {"\n"} hands often
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{ height: 80, width: 80, marginRight: 7 }}
                source={require("./src/images/Group.png")}
              />
              <Text style={{ textAlign: "center", fontSize: 15, marginTop: 5 }}>
                Wear a {"\n"} facemask
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.testSec}>
          <Image
            style={{
              height: 100,
              width: 90,
              resizeMode: "contain",
              marginRight: 5,
              zIndex: 2,
              marginTop: -10,
            }}
            source={require("./src/images/Frame.png")}
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 20, color: "white" }}>
              Do your own test!
            </Text>
            <Text style={{ marginTop: 5, color: "white" }}>
              Follow the instructions to {"\n"}do your own test.
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    backgroundColor: "#473F97",
    height: 350,
    paddingTop: 50,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secHeader: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    paddingTop: 15,
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  para: {
    color: "#FFF",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 1,
    paddingTop: 10,
    opacity: 0.7,
  },
  callBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FF4D58",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smsBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#4D79FF",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  prevent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  testSec: {
    backgroundColor: "#56549E",
    borderRadius: 16,
    height: 90,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 30,
    paddingHorizontal: 10,
    marginHorizontal: 22,
  },
  defaultPicker: {
    width: "100%",
    
  },
});
