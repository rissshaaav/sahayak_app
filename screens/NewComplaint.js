import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import FooterNav from "../components/FooterNav";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const NewComplaint = () => {
  const windowHeight = useWindowDimensions().height - 100;
  const windowWidth = useWindowDimensions().width - 40;
  return (
    <View style={styles.container}>
      <Header />
      <View style={[styles.main, { width: windowWidth, height: windowHeight }]}>
        <Text style={styles.pageHeading}>Create New Complaint</Text>
        <View>
          <TextInput
            multiline
            placeholder="Describe you complaint here"
            style={styles.desc}
          />
          <View style={styles.meta}>
            <View style={styles.locationContainer}>
              <Entypo name="location-pin" size={25} color="black" />
              <TextInput placeholder="location" style={styles.location} />
            </View>
            <View style={styles.departmentContainer}>
              <MaterialCommunityIcons
                name="office-building"
                size={25}
                color="black"
              />
              <TextInput placeholder="department" style={styles.department} />
            </View>
          </View>
          <View style={styles.iconsAndButtonContainer}>
            <View style={styles.mediaIcons}>
              <View style={styles.iconContainer}>
                <Ionicons name="images-outline" size={25} color="black" />
              </View>
              <View style={styles.iconContainer}>
                <AntDesign name="filetext1" size={25} color="black" />
              </View>
            </View>
            <Pressable style={styles.fileComplaintButton}>
              <Text style={styles.fileComplaintButtonText}>File Complaint</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <FooterNav />
    </View>
  );
};

export default NewComplaint;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  main: {},
  pageHeading: {
    fontSize: 25,
    height: 50,
    // fontFamily: 'Mitr-Regular',
  },
  desc: {
    borderWidth: 1,
    borderRadius: 5,
    minHeight: 150,
    textAlignVertical: "top",
    padding: 5,
    marginBottom: 10,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 5,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  departmentContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 5,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  iconsAndButtonContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 5,
  },
  mediaIcons: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 10,
    flex: 1,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
  fileComplaintButton: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#e5d010",
    justifyContent: "center",
    flex: 1,
  },
  fileComplaintButtonText: {
    textAlign: "center",
    // fontFamily: 'LeagueGothic-Regular',
  },
});
