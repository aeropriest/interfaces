import styles from './styles.module.scss'
import { FaStar } from "react-icons/fa6";
import Button from '../button';
import Image from 'next/image'
import { josefinSans, nunito, dancingScript } from "@/app/fonts";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";

import Logo from '../logo';


export default function Footer(){
    return(
        <section className={styles.footer}>
            <div className={styles.footerHeader}>
                <Logo/>
                <div>
                <div className={styles.mainName}>
                    <p className={nunito.className}>Georgia</p>
                </div>
                <div className={styles.subName}>
                    <p className={josefinSans.className}>Restaurant</p>
                </div>
                </div>
            </div>
            <div className={styles.footerSocialMedia}>
                <ul className={styles.socialMedia}>
                    <li className={styles.socialMediaItem}>
                        <a href='' className={styles.socialMediaLink}>
                            <FaSquareTwitter/>
                        </a>
                    </li>
                    <li className={styles.socialMediaItem}>
                        <a href='' className={styles.socialMediaLink}>
                            <FaSquareInstagram/>
                        </a>
                    </li>
                    <li className={styles.socialMediaItem}>
                        <a href='' className={styles.socialMediaLink}>
                            <FaSquareFacebook/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.copyRight}>
                <p className={styles.paragraph}>&copy; Copyright. Restarurant "Georgia". All Rights Reserved. </p>
            </div>
       </section>
    )
}