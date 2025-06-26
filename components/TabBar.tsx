import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabTitle } from "../models/Tab.model";

const TabBar: React.FC = ({}) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const tabTitle: TabTitle[] = [
    { title: "スーパー" },
    { title: "ドラッグストア" },
    { title: "その他" },
  ];

  return(
    //タブタイトル
    <View>
      <View style={styles.tabContainer}>
        {tabTitle.map((tab, index) => (
          <TouchableOpacity key={index} style={[styles.tabContent]} onPress={() => setSelectedTab(index)}>
            <Text>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        <Text>{tabTitle[selectedTab].title}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    height: 30,
    width: 500,
    backgroundColor: "rgb(126 216 227)",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  tabContent: {
    display: "flex",
    alignItems: "center",
  },
});

export default TabBar;
