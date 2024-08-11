'use client';

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useInView } from 'react-intersection-observer'


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function ChartSection() {

  const [rows,setRows] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();


  useEffect(()=>{
    async function loadPosts(page: number){
      const data = await getPosts(page);      
      setRows((prev) => [...prev, ...data]); // Append new data to existing rows
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
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${param}&_limit=18`);
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
          rows.map((row: any)=>{
            return(
            <div key={row.id} className={styles.row}>
              <p className={styles.title}>{row.id}</p>
              <p className={styles.body}>{row.title}</p>
              <p className={styles.body}>{row.body}</p>
            </div>            )
          })
      }
      </div>
      <div ref={ref} style={{ height: '20px' }} />
    </section>
  )
}