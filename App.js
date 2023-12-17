// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PhoneNoReg from "./screens/PhoneNoReg";
import OTPVerification from "./screens/OTPVerification";
import UserRegistration from "./screens/UserRegisteration";
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PhoneNoReg/> */}
      {/* <OTPVerification/> */}
      {/* <UserRegistration/> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    // paddingHorizontal: 15,
    // backgroundColor: "transparent",
  },
});
