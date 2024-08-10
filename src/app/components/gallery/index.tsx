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

export default function Gallery(){
   
    return (
        <div className={styles.gallery}>
            {menu.map((item, index) => (
                <div className={styles.imageWrapper} key={index}>
                    <Image 
                        src={item.image} 
                        alt={`Gallery image ${index + 1}`} 
                        // layout="responsive" 
                        width={300} 
                        height={300} // Set to a square ratio for aspect ratio maintenance
                    />
                    <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                            <h3>Image Title {index + 1}</h3>
                            <p>Description for image {index + 1}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}