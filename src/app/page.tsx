import Logo from './components/logo/page'
import styles from './styles.module.scss'
export default function Page() {
  return(
    <div className={styles.main}>
        {/* <h1 className={styles.text}>This is the main</h1> */}
        <Logo/>
    </div>
  )
}
