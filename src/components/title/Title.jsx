import styles from './Title.module.css'
export default function Title({text, id}) {
  return (
    <div className={styles.titleControl}>
      <h2 id={id} className={styles.title} data-text={text}>{text}</h2>
    </div>
  )
}
