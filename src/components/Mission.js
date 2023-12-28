import React,{useContext} from 'react'
import MyContext from '../context/MyConext'

function Mission() {
  const {data} = useContext(MyContext)
  console.log("dataValuein Mission component",data )
  
  return (
    <div>
        <h1>Mission mode component</h1>
        {
          data.map((item)=>{
            return(
              <h1>{item.title}</h1>
            )
          })
        }
    </div>
  )
}

export default Mission