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
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
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
    if (attempts > 6) {
      setMessage('You ran out of attempts')
      return;
    }
    if (isAlphabet && filled < 5) {
      setMatchedWord((prev) => prev + event.key);
      setFilled((prev) => prev + 1)
      console.log(matchedWord);
    }
    if (ascii === 66) {
      setFilled((prev) => prev - 1)
      setMatchedWord((prev) => prev.slice(0, -1));
    }
    if (ascii === 69) {
      setAttempts(prev => prev + 1);
    }

    console.log(`Key pressed: ${ascii} ${filled}`);
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
        <div className={styles.line}>Target: {targetWord} Matched: {matchedWord} {message}</div>
        <div className={styles.board}>
          {[0, 1, 2, 3, 4, 5].map((index) => {
            return (
              <div key={index} className={styles.line}>
                {[0, 1, 2, 3, 4].map(i => {
                  let style = '';
                  if (matchedWord[i])
                    style = matchedWord[i] === targetWord[i] ? ` ${styles.correct}` : ` ${styles.incorrect}`
                  return (<div key={i} className={`${styles.tile} ${style}`}>{matchedWord[i]}</div>)
                })}
              </div>)
          })}
        </div>
      </div>
    </div >
  );
};

export default Wordle;