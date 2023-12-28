import React, { useEffect, useState } from 'react';
import MyContext from './MyConext';

const MyContextProvider = ({ children }) => {
const [data, setData] = useState([]) 
console.log("data value is here ",data)
 
const getData = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
const finaldata = await res.json()
console.log("finaldata", finaldata)
setData(finaldata)
}  
 
 
useEffect(()=>{
   getData()
    },[])

  return <MyContext.Provider value={{data}}>
    {children}
    </MyContext.Provider>;
};

export default MyContextProvider;

