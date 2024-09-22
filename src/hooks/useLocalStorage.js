import {useState, useEffect} from 'react';

const PREFIX = 'CODEPEN CLONE ';
export default function useLocalStorage(key, initialValue) {
    const prefixkey = PREFIX + key;
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixkey)
        
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === 'function') {
            return initialValue()
        }else{
            return initialValue
        }
    }) ;

    useEffect(()=>{
        localStorage.setItem(prefixkey, JSON.stringify(value))
    },[prefixkey, value])
  return [value, setValue]
}
 
