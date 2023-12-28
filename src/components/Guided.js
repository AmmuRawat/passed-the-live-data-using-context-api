import React,{useContext} from 'react'
import MyContext from '../context/MyConext'

function Guided() {
  const {data} = useContext(MyContext)
  console.log("dataValuein guided component",data )
  return (
    <div>
        <h1> Guided component</h1>
        {
          data.map((item)=>{
            return(
              <h1>{item.body}</h1>
            )
          })
        }
    </div>
  )
}

export default Guided