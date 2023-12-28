import React,{useContext} from 'react'
import MyContext from '../context/MyConext'

function Setting() {
  const {data} = useContext(MyContext)
  console.log("dataValuein Setting component",data )
  
  return (
    <div>
        <h1> setting component</h1>
        {
          data.map((item)=>{
            return(
              <h1>{item.id}</h1>
            )
          })
        }
    </div>
  )
}

export default Setting