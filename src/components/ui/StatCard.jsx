import styles from './StatCard.module.css';

export default function StatCard({ num, label }) {
  return (
    <div className={styles.card}>
      <div className={styles.num}>{num}</div>
      <div className={styles.lbl}>{label}</div>
    </div>
  );
}