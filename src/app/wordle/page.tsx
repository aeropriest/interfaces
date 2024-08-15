'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'

const WORD_LIST_API_URL = 'api/wordle';

const WORD_LENGTH = 5;
const GUESS_LENGTH = 6;

const Wordle = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState(Array(GUESS_LENGTH).fill(null));
  const [guess, setGuess] = useState('')
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

  const onPressKey = (event: KeyboardEvent) => {
    if (/^[a-zA-Z]$/.test(event.key)) {
      console.log('Char pressed ', event.key);
      setGuess((prev) => prev + event.key);
    } else if (event.key === 'Backspace') {
      console.log('Backspace pressed');
    } else if (event.key === 'Enter') {
      console.log('Enter pressed');
    }

  }
  useEffect(() => {
    window.addEventListener('keydown', onPressKey)
    return () => window.removeEventListener('keydown', onPressKey);
  }, [])

  if (error)
    return <div className={styles.main}>Error occured fetching words</div>

  if (error)
    return <div className={styles.main}>Loading the game...</div>

  return (
    <div className={styles.main}>
      <div>{guess}</div>
      <div className={styles.board}>
        <div className={styles.line}>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>

        </div>
        <div className={styles.line}>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>
          <div className={styles.tile}>
            A
          </div>

        </div>
      </div>
    </div>

  );
};

export default Wordle;