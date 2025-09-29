import styles from './Title.module.css'
export default function Title({text}) {
  return (
    <div className={styles.titleControl}>
      <h2 className={styles.title} data-text={text}>{text}</h2>
    </div>
  )
}
