import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import { TaskContent } from "./models/Task.model";
import TaskItem from "./components/EditTaskItem";
import TabBar from "./components/TabBar";

export default function App() {
  const [taskText, setTaskText] = useState<string>("");

  const [taskArray, setTasks] = useState<TaskContent[]>([]);

  const [isEditing, setIsEditing] = useState<string>("");

  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  //タブバーの処理
  const clickTabBar = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };

  //タスク追加処理
  const addTask = () => {
    if (!taskText.trim()) return;
    if (isEditing) {
      setTasks(
        taskArray.map(
          (task) =>
            task.id === isEditing ? { ...task, text: taskText } : task,
          setIsEditing("")
        )
      );
    } else {
      const newTask = { id: Date.now().toString(), text: taskText };
      // newTaskをtaskArrayに代入する。
      if (newTask.text) {
        setTasks([...taskArray, newTask]);
      }
    }
    setTaskText(""); // タスクを保存した後、入力フィールドをクリア
  };

  //タスク編集
  const editButton = (task: TaskContent) => {
    setTaskText(task.text);
    setIsEditing(task.id);
  };

  //タスク削除
  const deleteButton = (id: string) => {
    setTasks(taskArray.filter((task) => task.id !== id));
    setTaskText(""); // タスクを保存した後、入力フィールドをクリア
  };

  const renderTask: ListRenderItem<TaskContent> = ({ item }) => {
    return (
      <TaskItem
        item={item}
        editButton={editButton}
        deleteButton={deleteButton}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <TabBar tabClick={clickTabBar}></TabBar> */}
      <Text style={styles.title}>買い物リスト</Text>
      <TextInput
        placeholder="タスクを入力してください"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity style={styles.saveButton} onPress={addTask}>
        <Text style={styles.saveButtonText}>{isEditing ? "編集" : "追加"}</Text>
      </TouchableOpacity>
      <FlatList
        data={taskArray}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
  title: {
    fontSize: 30,
    width: 300,
    textAlign: "left",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 300,
    borderColor: "#141fb4",
  },
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
