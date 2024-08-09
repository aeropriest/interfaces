import styles from './styles.module.scss'
import { FaStar } from "react-icons/fa6";
import Button from '../button';
import Image from 'next/image'
import { josefinSans, nunito, dancingScript } from "@/app/fonts";


export default function AboutUs(){
    return(
        <section className={styles.about}>
            <div className={styles.left}>
                {/* layout="responsive" */}
                <Image className={styles.image}  src='/about-us-img.png' alt='about us' width={800} height={400}/>
            </div>
            <div className={styles.right}>
                <div className={styles.about}>
                    <p className={dancingScript.className}>
                        About Us
                    </p>
                </div>
                <div className={styles.intro}>                    
                    <p className={josefinSans.className}>
                        Introduce To Georgian Dishes
                    </p>
                </div>
                <div className={styles.stars}>
                    <p className={styles.star}><FaStar  /></p><p className={styles.star}><FaStar  /></p><p className={styles.star}><FaStar  /></p><p className={styles.star}><FaStar  /></p>                
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={styles.stars}>
                    <p className={styles.star}><FaStar  /></p><p className={styles.star}><FaStar  /></p><p className={styles.star}><FaStar  /></p><p className={styles.star}><FaStar  /></p>                
                </div>
                <Button label='Read More'/>
            </div>
        </section>
    )
}