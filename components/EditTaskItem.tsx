//編集 削除
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { TaskItemProps } from "../models/Task.model";

const TaskItem: React.FC<TaskItemProps> = ({
  item,
  editButton,
  deleteButton,
}) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => editButton(item)}>
          <Icon name="edit" color="#4caf50">
            編集
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteButton(item.id)}>
          <Icon name="delete" color="#ab4848">
            削除
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saveButton: {
    alignItems: "center",
    backgroundColor: "#1e10be",
    padding: 10,
    width: 300,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  taskContainer: {
    flexDirection: "row",
    gap: 100,
    justifyContent: "space-between",
    backgroundColor: "#f6f4f1",
    alignItems: "center",
    marginTop: 10,
    height: 50,
  },
  taskText: {
    fontSize: 20,
    width: 150,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default TaskItem;
