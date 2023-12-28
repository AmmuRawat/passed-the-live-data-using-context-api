import React, {useEffect,useState} from 'react'
import { Route,Routes } from 'react-router-dom';
// import axios from "axios";
import Guided from './components/Guided'
import Mission from './components/Mission'
import Setting from './components/Setting'
import Navigation from './components/Navigation'
// import { MyContext } from "./context/MyConext";
import MyContextProvider from './context/MyContextProvider';
function App() {

  // const [getData, setData] = useState([]);
  // useEffect(() => {
  //   const receivedData = async () =>{
  //      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
  //     //  console.log("Data is: ",response);
  //      setData(response.data); 
  //   }
  //   receivedData();
  // },[getData])

  return (
    <>
      <Navigation />
      <div>
      <MyContextProvider>

        <Routes>
              <Route path="/" element={<Guided />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/setting" element={<Setting />} />
        </Routes>
        </MyContextProvider>

      </div>
    </>
  )
}

export default App