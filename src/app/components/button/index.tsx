import variables from "./variables.module.scss";
import styles from "@/app/georgia.module.scss";
import { josefinSans } from "@/app/fonts";

export default function Button(){
    return(
        <button className={styles.mainButton} type='button'>
            <p className={josefinSans.className}>Reservation</p>            
        </button>          
        )
}