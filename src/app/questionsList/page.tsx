'use client'
import { useEffect, useState } from 'react';
import './styles.css'
import React from 'react';

// const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
// const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

const QUESTIONS_API_BASE_URL = 'api/questions';
const SUBMISSIONS_API_BASE_URL = 'api/submissions';

interface question {
  category: string;
  id: string;
  name: string;
}

interface submission {
  questionId: string;
  status: string;
}

interface CategoryCounter {
  correct: number;
  total: number;
}

const QuestionsList = () => {
  const [questions, setQuestions] = useState<question[]>([])
  const [submissions, setSubmissions] = useState<submission[]>([])
  const results: { [key: string]: CategoryCounter } = {};

  const groupByCategory = (questions: question[]) => {
    return questions.reduce((acc, question) => {
      if (!acc[question.category]) {
        acc[question.category] = [];
      }
      acc[question.category].push(question);
      return acc;
    }, {} as Record<string, question[]>);
  };

  // useEffect(() => {
  //   fetch(QUESTIONS_API_BASE_URL)
  //     .then((response) => { return response.json() })
  //     .then((data) => {
  //       const groups = groupByCategory(data);
  //       console.log('Grouped questions ', groups);
  //     })
  //     .catch((error) => { console.log(error) });

  //   fetch(SUBMISSIONS_API_BASE_URL)
  //     .then((response) => { return response.json() })
  //     .then((data) => {
  //       setSubmissions(data)
  //     })
  //     .catch((error) => { console.log(error) });
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      const [questionsRes, submissionsRes] = await Promise.all([
        fetch(QUESTIONS_API_BASE_URL),
        fetch(SUBMISSIONS_API_BASE_URL)
      ]
      );

      const [questions, submissions] = await Promise.all([
        questionsRes.json(),
        submissionsRes.json(),
      ]);

      setQuestions(questions);
      setSubmissions(submissions);
    }

    fetchData();
  }, []);
  return (
    <div className='root'>
      {questions.map((question, index) => {
        let status = submissions.find(submission => submission.questionId === question.id)?.status;
        status = status ? status.toLowerCase().replace('_', '-') : 'unattempted'
        if (!results[question.category])
          results[question.category] = {
            correct: 0, total: 0,
          }
        results[question.category].total++;
        if (status === 'correct')
          results[question.category].correct++;

        console.log(results);
        return (<div className="category" key={index}>
          <h2>{question.category} - {`${results[question.category].correct} / ${results[question.category].total}`}</h2>
          <div className="question">
            <div className={`status ${status}`} />
            <h3>{question.name}</h3>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default QuestionsList;