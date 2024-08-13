'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'


const PhoneInput = () => {

  const [phoneNumber, setPhoneNumber] = useState('');


  const handleSubmit = () => {
    console.log('handleSubmit')
    setPhoneNumber('');
  }

  const handleKeyDown = (event: any) => {
    const len = phoneNumber.length;
    console.log('handleKeyDown ', event.key, len);
    if (event.key === 'Backspace') {
      if (len === 11) {
        setPhoneNumber(prev => prev.slice(0, -2));
      } else if (len === 7) {
        setPhoneNumber(prev => prev.slice(0, -3));
      } else if (len === 2) {
        setPhoneNumber(prev => prev.slice(0, -2));
      } else {
        setPhoneNumber(prev => prev.slice(0, -1));
      }
    }

  }

  const handleOnKeyUp = (event: any) => {

    console.log('handleOnKeyUp ', event.target.value, event.target.key, phoneNumber.length);
    const len = phoneNumber.length;

    if (/^[0-9]$/.test(event.key)) {
      setPhoneNumber((prev) => prev + event.key);
      if (len >= 14) {
        setPhoneNumber(prev => prev.slice(0, -1));
        return;
      }
      if (len === 0) {
        setPhoneNumber('(' + event.key);
      } else if (len === 4) {
        //(123
        setPhoneNumber((prev) => prev.slice(0, -1) + ') ' + event.key);
      } else if (len === 9) {
        //(123) 456
        setPhoneNumber((prev) => prev.slice(0, -1) + '-' + event.key);
        //also enable the button
        //(123) 456-7890
      }
      console.log(phoneNumber);
    }
  }

  return (
    <div className={styles.main}>
      <input type="text"
        placeholder="(888) 888-8888"
        className={styles.input}
        onKeyUp={handleOnKeyUp}
        onKeyDown={handleKeyDown}
        value={phoneNumber} />
      <button disabled={phoneNumber.length < 14} onClick={handleSubmit} className={styles.button}>Submit</button>
    </div>

  )
};

export default PhoneInput;