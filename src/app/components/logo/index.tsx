import { Stint_Ultra_Condensed } from 'next/font/google';
import styles from './styles.module.scss';
import { FaUtensils } from 'react-icons/fa'; // Importing the fork and spoon icon


export default function Logo() {
    return(<div className={styles.border}>              
        <FaUtensils className={styles.logo} />
    </div>)
}