// import { Entypo } from "@expo/vector-icons";
// import {useNavigation} from '@react-navigation/native';
// import React from "react";
// import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
// import theme from "../../../theme";
// import svgLogo from "../../../assets/logo.png";
import {Text, View} from 'react-native';

const CustomHeader: React.FC = () => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
  // return (
  //   <View style={styles.header}>
  //     <TouchableOpacity
  //       style={styles.buttonHeaders}
  //       onPress={() => {
  //         //@ts-ignore
  //         navigation.getParent("DrawerMenu").openDrawer();
  //       }}
  //     >
  //       <Entypo name="menu" size={24} color={theme.lightColors.black} />
  //     </TouchableOpacity>
  //     <Image style={styles.logo} source={svgLogo} />

  //     <TouchableOpacity
  //       style={styles.buttonHeaders}
  //       onPress={() => {
  //         //@ts-ignore
  //         navigation.getParent("DrawerCart").openDrawer();
  //       }}
  //     >
  //       <Entypo
  //         name="shopping-cart"
  //         size={24}
  //         color={theme.lightColors.black}
  //       />
  //     </TouchableOpacity>
  //   </View>
  // );
};

export default CustomHeader;

// const styles = StyleSheet.create({
//   header: {
//     width: '100%',
//     height: 90,
//     paddingTop: 40,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   logo: {
//     width: 180,
//     height: 40,
//   },
//   buttonHeaders: {
//     width: 40,
//     aspectRatio: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cart_menu: {
//     backgroundColor: '#343a40',
//   },
// });
