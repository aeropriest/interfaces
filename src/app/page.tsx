'use client';

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useInView } from 'react-intersection-observer'
import { faker, Faker } from '@faker-js/faker';

// https://www.youtube.com/watch?v=HptuMAUaNGk
// https://www.youtube.com/watch?v=q-ylRxSxGcY

interface Post {
  id: number;
  title: string;
  description: string;
  price: number;
}

const generateFakeProducts = (numProducts: number) => {
  const products = [];

  for (let i = 0; i < numProducts; i++) {
    const product = {
      id: i + 1,
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: 'fashion',
      price: parseFloat(faker.commerce.price()),
      stock: faker.datatype.number({ min: 1, max: 100 }),
      tags: [faker.commerce.department(), faker.commerce.productAdjective()],
      // brand: faker.company.companyName(),
      sku: faker.datatype.uuid(),
      weight: faker.datatype.float({ min: 0.5, max: 5, precision: 0.1 }),
      dimensions: {
        width: faker.datatype.float({ min: 10, max: 50, precision: 0.1 }),
        height: faker.datatype.float({ min: 10, max: 100, precision: 0.1 }),
        depth: faker.datatype.float({ min: 5, max: 30, precision: 0.1 }),
      },
      warrantyInformation: `${faker.datatype.number({ min: 1, max: 5 })} year warranty`,
      shippingInformation: `Ships in ${faker.datatype.number({ min: 1, max: 14 })} days`,
      availabilityStatus: faker.helpers.arrayElement(['In Stock', 'Low Stock', 'Out of Stock']),
      images: [faker.image.imageUrl(640, 480, 'fashion', true)],
      thumbnail: faker.image.imageUrl(150, 150, 'fashion', true),
    };

    products.push(product);
  }

  return products;
};

const fakeProducts = generateFakeProducts(20);

export default function ChartSection() {


  console.log(fakeProducts);
  
  const [rows,setRows] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();


  useEffect(()=>{
    async function loadPosts(page: number){
      const data = await getPosts(page);      
      console.log('fetche data', typeof data, data);
      const products = data.products || [];
      setRows((prev) => [...prev, ...products]); // Append new data to existing rows
      console.log(rows);
    }
    loadPosts(page);
  }, [page])

  useEffect(()=>{
    if( inView){      
      setPage((prev) => prev + 1); // Increment page to load more posts
      console.log('view updated ', page);
    }
  },[inView])


  async function getPosts(param: number){
    try{
      console.log('in getPosts')
      // const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${param}&_limit=18`);
      const data = await fetch(`https://dummyjson.com/products`);
      return await data.json();  
  
    }catch(error: any){
      console.log(error);
    }
  }

  if( !rows){
    return (<section className={styles.main}><p>failed to load the data</p></section>)
  }
  return (
    <section className={styles.main}>
      {/* <SimpleBars /> */}
      <div>
      {
          rows.map((row: any, index)=>{
            console.log(row);
            return(
            <div key={index} className={styles.row}>
              <p className={styles.count}>{index}</p> 
              <p className={styles.name}>{row.title}</p>
              <p className={styles.body}>{row.description}</p>
              <p className={styles.count}>${row.price}</p>
            </div>            )
          })
      }
      </div>
      <div ref={ref} style={{ height: '20px' }} />
    </section>
  )
}
