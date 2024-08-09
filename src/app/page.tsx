import variables from './variables.module.scss'
import styles from '@/app/georgia.module.scss'
import Image from 'next/image'
import Logo from './components/logo/page'

import { Dancing_Script, Josefin_Sans, Nunito } from 'next/font/google';
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--dancing-script-font' });
const josefinSans = Josefin_Sans({ subsets: ['latin'], variable: '--josefin-sans-font' });
const nunito = Nunito({ subsets: ['latin'], variable: '--nunito-font' });


export default function Page() {
  return (
// header
<header className={styles.header}>
  <div className={styles.brand}>
    <Logo/>
    <a href='#'><i className='fas fa-utensils'></i></a>
    <div>
    
      <div className={styles.mainName}>
        <h1 className={nunito.className}>Georgia</h1>
      </div>
      <p className={styles.subName}>Restaurant</p>
    </div>
    {/* <div className={styles.banner}>
      <h1 className={styles.mainHeading}>Welcome</h1>
      <h3 className={styles.subHeading}>Try great Georgian dishes</h3>
      <button className={styles.mainBtn} type='button'>Reservation</button>
    </div> */}
  </div>
</header>
  )
}