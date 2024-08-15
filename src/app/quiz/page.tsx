'use client'
import { useEffect, useState } from 'react';
import './styles.css'
import React from 'react';

// const QUICK_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz'
const QUICK_API_BASE_URL = 'api/quiz'

const Quiz = () => {
  const [questions, setQuestions] = useState<any>([]);
  const [counter, setCounter] = useState(0);
  const [answerChoice, setAnswerChoice] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(QUICK_API_BASE_URL)
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch((error: any) => console.error(error));
    }
    fetchData();
  }, []);

  const handleAnswer = (event: any) => {
    console.log(event.data, event);
  }

  const question = questions[counter];
  return (
    <>
      {question && (
        <div>
          <h1>{questions[counter].question}</h1>
          {questions[counter].answers.map((answer: any, index: number) => {
            return (
              <h2 key={index} className={`answer ${index === answerChoice
                ? index === questions[counter].correctAnswer
                  ? 'correct'
                  : 'incorrect'
                : ' '}`} onClick={() => {
                  setAnswerChoice(index);
                }}>{`${answer}`}</h2>
            )
          })}
        </div >)
      }
      <button disabled={!counter}
        onClick={() => {
          setCounter(counter => counter - 1);
        }}
      >Back</button>
      {/*  || */}
      <button disabled={answerChoice < 0 || counter >= questions.length - 1} onClick={() => {
        setCounter(counter => counter + 1);
        setAnswerChoice(-1)
      }}> Next</button >
    </>
  );
};

export default Quiz;