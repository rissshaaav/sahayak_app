import React, { useState } from "react";
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
import Header from "../components/Header";
import Complaint from "../components/Complaint";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

const NewComplaint = () => {
  const windowHeight = useWindowDimensions().height - 100;
  const windowWidth = useWindowDimensions().width - 40;
  const [complaint, setComplaint] = useState({
    complaintID: "BR0600001",
    complaintCreationDate: "dd/mm/yyyy",
    complaintLocation: "",
    complaintDepartment: "",
    complaintDesc: "",
    complaintSupportDoc: "Attached Support Doc",
  });
  // const complaint = {
  //   complaintID: "BR0600001",
  //   complaintCreationDate: "dd/mm/yyyy",
  //   complaintLocation: "XYZ Village",
  //   complaintDepartment: "department",
  //   complaintDesc: "your complaint description will appear here",
  //   complaintSupportDoc: "Attached Support Doc",
  // };
  const handleInputChange = (field, value) => {
    setComplaint({ ...complaint, [field]: value });
  };
  const pickPdf = async () => {
    try {
      const pdf = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });
      if (!pdf.canceled) {
        setSelectedPdf(pdf);
        console.log(pdf);
      }
      //   console.log(selectedPdf);
    } catch (error) {
      console.error("Error picking PDF:", error);
    }
  };
  const pickImage = async () => {
    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!image.canceled) {
        setSelectedImage(image);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
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
            value={complaint.complaintDesc}
            onChangeText={(text) => handleInputChange("complaintDesc", text)}
          />
          <View style={styles.meta}>
            <View style={styles.locationContainer}>
              <Entypo name="location-pin" size={25} color="black" />
              <TextInput
                placeholder="location"
                style={styles.location}
                value={complaint.complaintLocation}
                onChangeText={(text) =>
                  handleInputChange("complaintLocation", text)
                }
              />
            </View>
            <View style={styles.departmentContainer}>
              <MaterialCommunityIcons
                name="office-building"
                size={25}
                color="black"
              />
              <TextInput
                placeholder="department"
                style={styles.department}
                value={complaint.complaintDepartment}
                onChangeText={(text) =>
                  handleInputChange("complaintDepartment", text)
                }
              />
            </View>
          </View>
          <View style={styles.iconsAndButtonContainer}>
            <View style={styles.mediaIcons}>
              <Pressable style={styles.iconContainer} onPress={pickImage}>
                <Ionicons name="images-outline" size={25} color="black" />
              </Pressable>
              <Pressable style={styles.iconContainer} onPress={pickPdf}>
                <AntDesign name="filetext1" size={25} color="black" />
              </Pressable>
            </View>
            <Pressable style={styles.fileComplaintButton}>
              <Text style={styles.fileComplaintButtonText}>File Complaint</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.pageHeading}>Complaint Preview</Text>
        <Text style={styles.notice}>
          Note down the complaint ID from below, you won't be able to retrieve
          it again.
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
