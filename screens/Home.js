import { StyleSheet, Text, View, StatusBar, ScrollView, useWindowDimensions, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import FooterNav from "../components/FooterNav";
import Complaint from "../components/Complaint";
import MockComplaintData from '../MOCK_COMPLAINT_DATA.json';

const Home = () => {
  const windowHeight = useWindowDimensions().height-100;
  const windowWidth = useWindowDimensions().width-40;
  return (
    <View style={styles.container}>
      <Header />
      <View style={[styles.main, { width: windowWidth, height: windowHeight }]}>
        <Text style={styles.pageHeading}>Community Complaints</Text>
        {/* <ScrollView style={[styles.scrollView, { width: windowWidth, height: windowHeight-50 }]}>
          <Complaint/>
          <Complaint/>
          <Complaint/>
          <Complaint/>
        </ScrollView> */}
        <FlatList 
          data={MockComplaintData}
          renderItem={({item})=>{return(
            <Complaint item={item}/>
          )}}
        />
      </View>
      <FooterNav />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  main: {
    
  },
  pageHeading: {
    fontSize: 25,
    height: 50,
    // fontFamily: 'Mitr-Regular',
  },
  scrollView: {
    
  },
});
