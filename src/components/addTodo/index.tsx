'use client';

import { useState } from 'react';

import { Todo } from '@/types';

import { Modal } from '../modal';
import { getStyles } from './styles';
import { CreateTodoModal } from '../createTodoModal';

interface IAddTodo {
  onCreateAction: (todo: Todo) => void;
}

export const AddTodo = ({ onCreateAction }: IAddTodo) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = getStyles();
  return (
    <>
      <button type="button" className={styles.buttonAdd} onClick={() => setIsOpen(true)}>
        Add todo
      </button>
      <Modal isOpen={isOpen}>
        <CreateTodoModal onCreateAction={onCreateAction} onCloseAction={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};
