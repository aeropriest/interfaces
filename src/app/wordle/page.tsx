'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'

const WORD_LIST_API_URL = 'api/wordle';


const Wordle = () => {
  const [loading, setLoading] = useState(true);
  const [targetWord, setTargetWord] = useState('');
  const [matchedWord, setMatchedWord] = useState('');
  const [error, setError] = useState(false)
  const [filled, setFilled] = useState(0);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchWords = async () => {
        const res = await fetch(WORD_LIST_API_URL);
        const words = await res.json();
        setTargetWord(words[Math.floor(Math.random() * 5)]);
      }
      fetchWords();
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [])

  const handleKeyUp = (event: any) => {
    console.log(event.key);
    const ascii = event.key.charCodeAt(0)
    const isAlphabet = /^[A-Za-z]$/.test(event.key);
    if (isAlphabet && filled < 5) {
      // if (event.key === targetWord[filled]) {
      //   setMatchedWord((prev) => prev + event.key);
      // }
      setMatchedWord((prev) => prev + event.key);
      console.log(matchedWord);
    }
    if (ascii === 66) {
      setMatchedWord((prev) => prev.slice(0, -1));
    }

    console.log(`Key pressed: ${ascii}`);
  };

  if (error)
    return <div className={styles.main}>Error occured fetching words</div>

  if (error)
    return <div className={styles.main}>Loading the game...</div>

  const tileStyle = (i: number) => {
    if (!matchedWord[i])
      return styles.tile;

    return styles.tile + matchedWord[i] === targetWord[i] ? styles.correct : styles.incorrect;
  }
  return (
    <div className={styles.main} tabIndex={0} onKeyUp={handleKeyUp}>
      <div className={styles.board}>
        <div className={styles.line}>Target: {targetWord} Matched: {matchedWord}</div>
        <div className={styles.line}>
          {[0, 1, 2, 3, 4].map(i => (
            // <div key={i} className={`${matchedWord[i] === targetWord[i] ? styles.correct : styles.incorrect}`}>{matchedWord[i]}</div>
            <div key={i} className={`${tileStyle(i)}`}>{matchedWord[i]}</div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Wordle;