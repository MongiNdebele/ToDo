import {ApiDataType, Todo} from './components/types';

const baseUrl: string = 'http://localhost:3005/api';

export async function getTodos(): Promise<ApiDataType> {
  try {
    const response = await fetch(`${baseUrl}/getAll`);
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const data = (await response.json()) as ApiDataType;
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addTodo(formData: Todo): Promise<ApiDataType> {
  try {
    const todo: Omit<Todo, '_id'> = {
      name: formData.name,
      description: formData.description,
      complete: false,
    };

    const response = await fetch(`${baseUrl}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error('Failed to add todo');
    }

    const data = (await response.json()) as ApiDataType;
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateTodo(todo: Todo): Promise<ApiDataType> {
  try {
    const todoUpdate: Pick<Todo, 'complete'> = {
      complete: true,
    };

    const response = await fetch(`${baseUrl}/update/${todo._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoUpdate),
    });

    if (!response.ok) {
      throw new Error('Failed to update todo');
    }

    const data = (await response.json()) as ApiDataType;
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTodo(_id: string): Promise<ApiDataType> {
  try {
    const response = await fetch(`${baseUrl}/delete/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete todo');
    }

    const data = (await response.json()) as ApiDataType;
    return data;
  } catch (error) {
    throw error;
  }
}
