import { getStyles } from './styles';

export const Footer = () => {
  const styles = getStyles();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>«Today&apos;s efforts are tomorrow&apos;s success!» 💪</p>
    </footer>
  );
};
