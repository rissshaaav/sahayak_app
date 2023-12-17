import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DamagedRoad from "../assets/images/sampleDamageRoad.jpg";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Complaint = () => {
  const complaintStatus = {
    active: {
      text: "active",
      color: "#E51010",
      icon: (
        <MaterialCommunityIcons
          name="progress-alert"
          size={30}
          color="#E51010"
        />
      ),
    },
    inProgress: {
      text: "in-progress",
      color: "#E5D010",
      icon: (
        <MaterialCommunityIcons
          name="progress-clock"
          size={30}
          color="#E5D010"
        />
      ),
    },
    resolved: {
      text: "resolved",
      color: "#54E510",
      icon: (
        <MaterialCommunityIcons
          name="progress-check"
          size={30}
          color="#54E510"
        />
      ),
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.complaintID}>Complaint ID: BR0600001</Text>
        <Text style={styles.complaintDate}>11/12/2023 12:42pm</Text>
      </View>
      <View style={styles.meta}>
        <View style={styles.location}>
          <Entypo name="location-pin" size={25} color="black" />
          <Text style={{fontSize: 15}}>XYZ Village, Bihar</Text>
        </View>
        <View style={styles.department}>
          <MaterialCommunityIcons
            name="office-building"
            size={24}
            color="black"
          />
          <Text style={{fontSize: 15}}>Transport</Text>
        </View>
      </View>
      <View style={styles.descContainer}>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus esse similique fuga odit fugit soluta accusamus laudantium odio ullam, corrupti officia at dolorem. Nemo voluptatibus debitis error facere. Cupiditate!
        </Text>
      </View>
      <View style={styles.supportDocContainer}>
        <AntDesign name="filetext1" size={25} color="black" />
        <Text style={styles.fileName}>Road Survey Report 2023-24</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={DamagedRoad} style={styles.image} />
      </View>
      <View style={styles.tools}>
        <View style={styles.meTooContainer}>
          <View style={styles.meTooButton}>
            <Text style={styles.meTooLabel}>me too</Text>
            <Ionicons name="hand-right-outline" size={30} color="black" />
          </View>
          <View>
            <Text style={styles.meTooCount}>250</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>status</Text>
          <View style={styles.statusButton}>
            {complaintStatus.inProgress.icon}
            <Text
              style={[
                styles.statusText,
                { color: `${complaintStatus.inProgress.color}` },
              ]}
            >
              {complaintStatus.inProgress.text}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Complaint;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: 'auto',
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height: 25,
    marginBottom: 5,
  },
  complaintID: {
    fontSize: 20,
  },
  complaintDate: {
    fontSize: 10,
    color: '#777777',
  },
  meta: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    width: '45%',
  },
  department: {
    flexDirection: "row",
    alignItems: "center",
    width: '45%',
  },
  descContainer: {
    marginBottom: 5,
  },
  supportDocContainer: {
    borderWidth: 1,
    height: 30,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  imageContainer: {
    marginBottom: 5,
  },
  image: {
    aspectRatio: 4 / 3,
    height: 258,
    //   width: 'fill',
    borderRadius: 5,
    objectFit: "contain",
  },
  tools: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  meTooContainer: {
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    width: "40%",
    height: 50,
    padding: 5,
  },
  meTooButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  meTooLabel: {
    fontSize: 17,
    letterSpacing: -1,
  },
  meTooCount: {
    fontSize: 17,
    letterSpacing: -1,
  },
  statusContainer: {
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    width: "50%",
    height: 50,
    padding: 5,
  },
  statusLabel: {
    fontSize: 17,
    letterSpacing: -1,
  },
  statusButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    marginLeft: 5,
    fontSize: 17,
    letterSpacing: -1,
  },
});