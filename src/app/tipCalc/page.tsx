'use client'
import React from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const TipCalculator = () => {
  const [total, setTotal] = useState(50);
  const [people, setPeople] = useState(1);
  const [percent, setPercent] = useState(18);

  const saveValue = (value: any, setState: any) => {
    setState(value);
  }

  const totalTip = (total / percent);
  const tipPerPerson = (totalTip / people)

  return (
    <div className={styles.root}>
      <label htmlFor='bill'>Bill</label>
      <input id='bill' type='number' min='0' value={total} onChange={(event) => { saveValue(event.target.value, setTotal) }} />
      <label htmlFor='percent'>Tip Percentage</label>
      <input id='percent' type='number' value={percent} onChange={(event) => { saveValue(event.target.value, setPercent) }} />
      <label htmlFor='people'>Number of People</label>
      <input id='people' type='number' value={people} onChange={(event) => { saveValue(event.target.value, setPeople) }} />
      <p>Total Tip: {isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip per person: {isNaN(tipPerPerson) || isNaN(people) || people === 0 ? '-' : `$${tipPerPerson.toFixed(2)}`}</p>
    </div>
  );
};

export default TipCalculator;