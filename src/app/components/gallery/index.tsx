import Image from 'next/image';
import Button from '../button';
import styles from './styles.module.scss'
import { josefinSans } from "@/app/fonts";

type ButtonProps = {
    label: string;
}

const menu = [
    {
        name: 'Barito',
        price: '$5.99',
        image: '/gallery-img-1.jpeg',
    },
    {
        name: 'Pancakes',
        price: '$2.99',
        image: '/gallery-img-2.jpeg',
    },
    {
        name: 'Olive Pizza',
        price: '$9.99',
        image: '/gallery-img-3.jpeg',
    },
    {
        name: 'Barito',
        price: '$5.99',
        image: '/gallery-img-4.jpeg',
    },
    {
        name: 'Pancakes',
        price: '$2.99',
        image: '/gallery-img-5.jpeg',
    },
    {
        name: 'Olive Pizza',
        price: '$9.99',
        image: '/gallery-img-6.jpeg',
    },
];

export default function Gallery({label}: ButtonProps){
    return(
        <div className={styles.gallery}>
            {menu.map(item => {
                console.log(item);
                return(                
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <div className={styles.cardOverlay}>
                                <h1 className={styles.name}>{item.name}</h1>
                                <p className={styles.price}>{item.price}</p>
                                <Button label="Order Now"></Button>
                                <Image className={styles.image} src={item.image} width={800} height={450} alt={item.name} />
                            </div>                            
                        </div>
                    </div>  
                 )
            }         
            )}
        </div>
        )
}