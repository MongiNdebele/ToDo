export interface ToDoNote {
  _id: string;
  name: string;
  description: string;
  complete: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoProps {
  todo: ToDoNote;
}

export type ApiDataType = {
  message: string;
  status: string;
  todos: ToDoNote[];
  todo?: ToDoNote;
};
