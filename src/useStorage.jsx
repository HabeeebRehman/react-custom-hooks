import React from "react"
import { useState } from "react"

const useStorage =(key, initialValue) => {

    const storedValue = JSON.parse(sessionStorage.getItem(key)) || JSON.parse(localStorage.getItem(key)) || initialValue;

    const setStorage = (data)=>{
        localStorage.setItem('content', JSON.stringify(data))
        sessionStorage.setItem('content', JSON.stringify(data))
    };
    return [storedValue,setStorage];
}
export default useStorage;