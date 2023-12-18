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
import Complaint from "../components/Complaint";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const NewComplaint = () => {
  const windowHeight = useWindowDimensions().height - 100;
  const windowWidth = useWindowDimensions().width - 40;
  const complaint = {
    complaintID: "BR0600001",
    complaintCreationDate: "dd/mm/yyyy",
    complaintLocation: "XYZ Village",
    complaintDepartment: "department",
    complaintDesc: "your complaint description will appear here",
    complaintSupportDoc: "Attached Support Doc",
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={[styles.main, { width: windowWidth, height: windowHeight }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageHeading}>Create New Complaint</Text>
        <View style={styles.newComplaintBox}>
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
        <Text style={styles.pageHeading}>Complaint Preview</Text>
        <Text style={styles.notice}>
          Note down the complaint ID from below, you won't be able to retrieve it again.
        </Text>
        <Complaint item={complaint} />
      </ScrollView>
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
    // fontFamily: 'Mitr-Regular',
  },
  newComplaintBox: {
    marginBottom: 10,
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
    gap: 4,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  iconsAndButtonContainer: {
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
  notice: {
    backgroundColor: "#fe8181",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});
