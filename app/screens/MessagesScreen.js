import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Baba Da Dhaba",
    description: "How long till delivery?",
    image: require("../assets/dhaba.jpg"),
  },
  {
    id: 2,
    title: "Mangal Karyana Store",
    description:
      "Please leave a rating of the our services.",
    image: require("../assets/mangal.jpg"),
  },
  {
    id: 3,
    title: "Corner Gaming",
    description:
      "When will the COD Black Ops: Cold War be back in stock???",
    image: require("../assets/game.png"),
  }
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Baba Da Dhaba",
              description: "How long till delivery?",
              image: require("../assets/dhaba.jpg"),
            },
            {
              id: 2,
              title: "Mangal Karyana Store",
              description:
                "Please leave a rating of the our services.",
              image: require("../assets/mangal.jpg"),
            },
            {
              id: 3,
              title: "Corner Gaming",
              description:
                "When will the COD Black Ops: Cold War be back in stock???",
              image: require("../assets/game.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
