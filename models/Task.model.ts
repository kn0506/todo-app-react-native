  export interface TaskContent {
    id: string;
    text: string;
  }

  export interface TaskItemProps {
    item: TaskContent;
    editButton: (task: TaskContent) => void;
    deleteButton: (id: string) => void;
  }