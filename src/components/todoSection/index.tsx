import { Todo } from '@/types';
import { getTodos } from '@/services';

import { getStyles } from './styles';
import { ListTodo } from '../listTodo';

export const TodoSection = async () => {
  let todos: Todo[] | undefined = [];
  try {
    todos = await getTodos();
  } catch {
    todos = undefined;
  }

  const styles = getStyles(!!todos);

  return (
    <section>
      <div className={styles.wrapper}>
        <ListTodo todos={todos} />
      </div>
    </section>
  );
};
