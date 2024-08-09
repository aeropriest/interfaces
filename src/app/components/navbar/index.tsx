import styles from './styles.module.scss'
import { FaStar } from "react-icons/fa6";
import Button from '../button';
import Image from 'next/image'
import { josefinSans, nunito, dancingScript } from "@/app/fonts";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";

import Logo from '../logo';


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <input type="checkbox" id="check" className={styles.check}/>
            <div className={styles.hamburger}>
                <label className={styles.menu}>
                    <div className={styles.menuLine1 }></div>
                    <div className={styles.menuLine2 }></div>
                    <div className={styles.menuLine3 }></div>
                </label>
            </div>
            <div className={styles.navigator}>
                <div className={styles.left}>
                    <Image className='leftImg1' src="/nav-img-1.jpeg" alt="1" width={100} height={100}/>
                    <Image className='leftImg2' src="/nav-img-2.jpeg" alt="1" width={100} height={100}/>
                    <Image className='leftImg3' src="/nav-img-3.jpeg" alt="1" width={100} height={100}/>
                </div>
            </div>
      </nav>
    )
}