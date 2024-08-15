'use client'
import React, {useEffect, useState} from 'react';

interface LocalStorageProps {
  key: string;
  initialValue?: string;
}

const useLocalStorage = ({key, initialValue} : LocalStorageProps) => {
  const [value, setValue] = useState(()=>{
    const savedValue = JSON.parse(localStorage.getItem(key) as any)
    return savedValue;
  })

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
  },[key,value])
  // const [value, setValue] = useState(()=>{
  //   //actually read if from the window.
  //   const savedValue = localStorage.getItem(key) as any;
  //   if( savedValue == null ) {
  //     localStorage.setItem(key, JSON.stringify(initialValue));
  //     return initialValue;
  //   }
  //   return JSON.parse(savedValue);
  // })

  // const setNewValue = (newValue: any) =>{
  //   localStorage.setItem(key, JSON.stringify(newValue));
  //   setValue(newValue);
  // }

  return {value, setValue};

};

export default useLocalStorage;