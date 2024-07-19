import {ToDoNote, ApiDataType} from './types';

const baseUrl: string = 'http://localhost:3005/api';

export async function updateTodo(todo: ToDoNote): Promise<ApiDataType> {
  try {
    const todoUpdate: Pick<ToDoNote, 'complete'> = {
      complete: !todo.complete,
    };

    const response = await fetch(`${baseUrl}/status/${todo._id}`, {
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
