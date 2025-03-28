'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

import { Todo } from '@/types';
import { createTodo, deleteTodo } from '@/services';

import { AddTodo } from '../addTodo';
import { CardTodo } from '../cardTodo';

interface IListTodo {
  todos: Todo[] | undefined;
}

export const ListTodo = ({ todos }: IListTodo) => {
  const [todosList, setTodosList] = useState<Todo[]>(todos ? todos : []);

  const onCreateTodo = async (todo: Todo) => {
    try {
      const res = await createTodo(todo);
      if (res) {
        setTodosList((prev) => [...prev, todo]);
        toast.success('Todo created successfully');
      }
    } catch {
      toast.error('Error create todo');
    }
  };

  const onDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodosList((prev) => prev.filter((todo) => todo.id !== id));
      toast.success('Todo removed successfully');
    } catch {
      toast.error('Error delete todo');
    }
  };

  if (!todos) {
    return <p className="text-center text-lg text-red-500">Failed to load To-Do</p>;
  }

  return (
    <>
      {todosList.map((todo) => (
        <CardTodo key={todo.id} todo={todo} onDeleteAction={onDeleteTodo} />
      ))}
      <AddTodo onCreateAction={onCreateTodo} />
    </>
  );
};
