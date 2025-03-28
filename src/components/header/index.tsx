import { getStyles } from './styles';

export const Header = () => {
  const styles = getStyles();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>📋 My To-Do List</h1>
      <p className={styles.text}>Stay productive, achieve goals! 🚀</p>
    </header>
  );
};
