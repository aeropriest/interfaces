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
                            <h1 className={styles.name}>{item.name}</h1>
                            <p className={styles.price}>{item.price}</p>
                            <Button label="Order Now"></Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    // return(
    //     <section className={styles.gallery}>
    //                     {menu.map(item => {
    //             console.log(item);
    //             return(            <div className={styles.cardWrapper}>
    //                 <div className={styles.card}>
    //                     <div className={styles.cardOverlay}>
    //                     <h1 className={styles.name}>Food Name</h1>
    //                     <p className={styles.price}>$20.88</p>
    //                         <Button label="Order Now"></Button>
    //                     </div>
    //                     <Image className={styles.image} src={'/gallery-img-1.jpeg'} width={800} height={450} alt={'gallery-img-1.jpeg'} />
    //                     {/* <img src="gallery-img-1.jpeg" className={styles.img} /> */}
    //                 </div>
    //             </div>
    //             )})}
    //     </section>
    // )
    return(
        <div className={styles.gallery}>
            {menu.map(item => {
                console.log(item);
                return(                
                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            {/* <div className={styles.cardOverlay}> */}
                                {/* <h1 className={styles.name}>{item.name}</h1> */}
                                {/* <p className={styles.price}>{item.price}</p> */}
                                {/* <Button label="Order Now"></Button> */}
                                <Image className={styles.image} src={item.image} width={800} height={450} alt={item.name} />
                            {/* </div>                             */}
                        </div>
                    </div>  
                 )
            }         
            )}
        </div>
        )
}