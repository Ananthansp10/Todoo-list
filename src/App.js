import React from 'react'
import './App.css'
import {useState} from 'react'
function App() {
  let [todoos,setTodoos]=useState([])
  let [todoo,setTodoo]=useState('')

  function deletetodo(id){
    setTodoos(todoos=>todoos.filter(todoo=>{
      return todoo.id!==id
    }))
  }
 return(
  <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>You Can Add your todoos .... </h2>
      </div>
      <div className="input">
        <input type="text" onChange={(e)=>setTodoo(e.target.value)} placeholder="Add item..." />
        <i className="fas fa-plus" onClick={()=>setTodoos(todoos=>[...todoos,{id:Date.now(),value:todoo,status:false}])}></i>
      </div>
      <div className="todos">
      {todoos.map((obj)=>{
          return(
            <div className="todo">
          <div className="left">
            <input value={obj.status} type="checkbox" name="" id="" onChange={(e)=>{
              setTodoos(todoos.filter((obj2)=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }return obj2
              }))
            
            } }/>
            <p>{obj.value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>deletetodo(obj.id)}></i>
          </div>
        </div>)
        })}
      </div>
      <div className="row">
        <h2>Active Todoos...</h2>
      </div>
      <br />
      <div className="row1">
      {
          todoos.map((obj)=>{
            if(obj.status){
              return(
                <div>
                <h3 className='row1'>{obj.value}</h3>
                <br />
                </div>
              )
            }
            return null
          })
        }
      </div>
    </div>

 )
}

export default App;
