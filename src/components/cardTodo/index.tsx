'use client';

import { Todo } from '@/types';

import { getStyles } from './styles';
import { useState } from 'react';

interface ICardTodo {
  todo: Todo;
  onDeleteAction: (id: number) => void;
}

export const CardTodo = ({ todo, onDeleteAction }: ICardTodo) => {
  const styles = getStyles(todo.completed);
  const [isPending, setIsPending] = useState(false);

  const onDelete = async () => {
    try {
      setIsPending(true);
      await onDeleteAction(todo.id);
      setIsPending(false);
    } catch {
      setIsPending(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{todo.title}</h3>
      <div className={styles.wrapperStatus}>
        <p className={styles.status}>{todo.completed ? '✅ Completed' : '❌ In Progress'}</p>
        <button type="button" onClick={onDelete} className={styles.button} disabled={isPending}>
          Delete
        </button>
      </div>
    </div>
  );
};
