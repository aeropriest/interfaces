import styles from "@/app/georgia.module.scss";
import Logo from "./components/logo/page";
import Button from "./components/button/page";

import { josefinSans, nunito, dancingScript } from "@/app/fonts";

export default function Page() {
  return (
    // header
    <header className={styles.header}>
      <div className={styles.brand}>
        <Logo />
        <a href="#">
          <i className="fas fa-utensils"></i>
        </a>
        <div>
          <div className={styles.mainName}>
            <p className={nunito.className}>Georgia</p>
          </div>
          <div className={styles.subName}>
            <p className={josefinSans.className}>Restaurant</p>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
          <div className={styles.mainHeading}>
            <p className={dancingScript.className}>
              Welcome
            </p>
          </div>
          <div className={styles.subHeading}>
            <p className={josefinSans.className}>Try great Georgian dishes</p>
          </div>
            <Button></Button>
      </div>      
    </header>
  );
}
