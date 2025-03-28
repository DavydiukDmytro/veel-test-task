import axios from 'axios';

import { Todo } from '@/types';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getTodos = async (): Promise<Todo[]> => {
  return axios.get<Todo[]>('/todos?_limit=10').then(({ data }) => data);
};

export const createTodo = async (todoData: Todo): Promise<Todo> => {
  return await axios.post<Todo>('/todos', todoData).then(({ data }) => data);
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete<Todo>(`/todos/${id}`);
};
