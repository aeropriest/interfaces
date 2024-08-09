import variables from './variables.module.scss'
import styles from '@/app/georgia.module.scss'
import Image from 'next/image'
import Logo from './components/logo/page'
export default function Page() {
  return (
// header
<header className={styles.header}>
  <div className={styles.brand}>
    <Logo/>
    <a href='#'><i className='fas fa-utensils'></i></a>
    <div>
      <h1 className={styles.mainName}>Georgia</h1>
      <p className={styles.subName}>Restaurant</p>
    </div>
    <div className={styles.banner}>
      <h1 className={styles.mainHeading}>Welcome</h1>
      <h3 className={styles.subHeading}>Try great Georgian dishes</h3>
      <button className={styles.mainBtn} type='button'>Reservation</button>
    </div>
  </div>
</header>
  )
}