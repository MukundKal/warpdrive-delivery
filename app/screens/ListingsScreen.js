import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Lays - Pack of 3",
    price: 50,
    image: require("../assets/lays.jpg"),
  },
  {
    id: 2,
    title: "COD: Modern Warfare 2019",
    price: 2999,
    image: require("../assets/cod.jpg"),
  },
  {
    id: 3,
    title: "OnePlus Type-C Cable 100cm",
    price: 499,
    image: require("../assets/oneplus.jpg"),
  },
  {
    id: 4,
    title: "Nutrabay Pro: Multivitamins - 120 Tabs",
    price: 400,
    image: require("../assets/nutra.jpg"),
  },
  {
    id: 5,
    title: "Family Pack Blackcurrent & Raisins Ice Cream",
    price: 143,
    image: require("../assets/kwality.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"₹" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light  ,
  },
});

export default ListingsScreen;
