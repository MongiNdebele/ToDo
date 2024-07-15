export interface Todo {
  _id: string;
  name: string;
  description: string;
  complete: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoProps {
  todo: Todo;
}

export type ApiDataType = {
  message: string;
  status: string;
  todos: Todo[];
  todo?: Todo;
};
