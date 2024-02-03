import styles from "../styles/layout.module.css"

export default function Rosters() {
  return (
    <section className="container">
      <h3>Rosters Page</h3>
      <div className={`${styles.row}`}>
        <div className={styles.col1}>1 Column </div>
        <div className={styles.col1}>1 Column </div>
        <div className={styles.col2}>2 Columns </div>
        <div className={styles.col4}>4 Columns </div>
        <div className={styles.col4}>4 Columns </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col12}>12 columns</div>
      </div>
      
    </section>
  )
}