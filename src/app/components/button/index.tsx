import styles from './styles.module.scss'
import { josefinSans } from "@/app/fonts";

type ButtonProps = {
    label: string;
}
export default function Button({label}: ButtonProps){
    return(
        <button className={styles.mainButton} type='button'>
            <p className={josefinSans.className}>{label}</p>            
        </button>          
        )
}