'use client';

import { ChangeEvent, useState } from 'react';

import { Todo } from '@/types';

import { getStyles } from './styles';

interface ICreateTodo {
  onCloseAction: () => void;
  onCreateAction: (todo: Todo) => void;
}

export const CreateTodoModal = ({ onCloseAction, onCreateAction }: ICreateTodo) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [errorValidation, setErrorValidation] = useState('');

  const styles = getStyles();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onCreateAction({ id: Date.now(), title, completed, userId: 1 });

    onCloseAction();
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const LIMIT = 150;

    const title = e.target.value.trim();

    setTitle(e.target.value);

    if (title.length > LIMIT) {
      setErrorValidation(`Title must be ${LIMIT} characters or less.`);
    }

    if (!!errorValidation && title.length < LIMIT) {
      setErrorValidation('');
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Create New Task</h3>

      <textarea placeholder="Task title..." value={title} onChange={onChange} className={styles.text} />
      {errorValidation && <p className={styles.error}>{errorValidation}</p>}

      <div className={styles.wrapperStatus}>
        <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} className={styles.input} />
        <label onClick={() => setCompleted(!completed)} className={styles.label}>
          {completed ? '✅ Completed' : '❌ In Progress'}
        </label>
      </div>

      <div className={styles.wrapperButton}>
        <button onClick={onCloseAction} className={styles.button}>
          Cancel
        </button>

        <button onClick={handleSubmit} className={styles.button} disabled={title === '' || !!errorValidation}>
          Add Task
        </button>
      </div>
    </div>
  );
};
