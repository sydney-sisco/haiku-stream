import styles from './SubmitButton.module.css';

export default function SubmitButton(props) {


  return (
    <button className={styles.pushable}>
      <span class={styles.shadow}></span>
      <span class={styles.edge}></span>
      <span className={styles.front}>
        Submit
      </span>
    </button>
  )
}
