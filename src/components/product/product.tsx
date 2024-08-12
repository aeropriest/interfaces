import styles from './styles.module.scss'
import React from 'react';
import Image from 'next/image';

interface product{
  index: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Product = ({props}: {props: product}) => {
  console.log('Load the products ', props)
  return (
    <div className={styles.row}>
      <Image src={props.image} width={100} height={100} alt={props.title}/>
      {/* <div className={styles.count}>{props.index}</div> */}
      <div className={styles.name}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>${props.price}</div>
    </div>
  );
};

export default Product;