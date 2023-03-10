import { useEffect, useState } from 'react'

import { 
  Main,
  Container,
  Img,
  Header,
  Form,
  Menu,
  CanselBTN,
  Bottom
} from './style/app.styles'
import bg from './assets/bg.jpg'
import moon from './assets/moon.svg'
import soon from './assets/soon.svg'
import circleDark from './assets/cirlcleDark.svg'
import x from './assets/x.svg'
import completedImg from './assets/completed.svg'

function App() {

  const [starterData,setStarterData]=useState(localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')):[])
  const [dark,setDark]=useState(true)
  const [text,setText]=useState('')
  const [all,setAll]=useState(true)
  const [active,setActive]=useState(false)
  const [completed,setCompleted]=useState(false)
  const [activeList,setActivelist]=useState([])
  const [completedList,setCompletedList]=useState([])
  const [data,setData]=useState(starterData)
  const mode = localStorage.getItem('mode')
  const [location,setLocation]=useState(localStorage.getItem('location')?JSON.parse(localStorage.getItem('location')):'All')
  useEffect(()=>{
    if(mode){
      let ssd=JSON.parse(localStorage.getItem('mode'))
      setDark(ssd)
    }
  },[])


  useEffect(()=>{
    let aclist = [];
    starterData.forEach((element) => {
      if (!element.completed) {
        aclist.push(element);
      }
    });

    let complist = [];
    starterData.forEach((element) => {
      if (element.completed) {
        complist.push(element);
      }
    });
    setActivelist(aclist)
    setCompletedList(complist)
  },[starterData,all,active,completed,data])
  
  const createItem =(e)=>{
    e.preventDefault()
    let val=text.trim()
    if(val.length>1){
      let id= Math.floor(Math.random()*100000000)
      const d = new Date();
      let year=d.getFullYear()
      let month=(d.getMonth()+1)<10?'0'+(d.getMonth()+1):(d.getMonth()+1)
      let day=d.getDate()<10?'0'+d.getDate():d.getDate()
      let hours=d.getHours()<10?'0'+d.getHours():d.getHours()
      let minutes=d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes()
      let createdAt=`${hours}:${minutes} ${day}/${month}/${year}`
      let list=starterData
      let item={
        text:val,
        completed:false,
        createdAt,
        id
      }
      list.push(item)
      setStarterData(list)
      localStorage.setItem('data',JSON.stringify(list))
      setText('')
    }
  }

  

  const deleteItem=(id)=>{
    let newList=starterData.filter((element)=>{
      return id!=element.id
    })
    setStarterData(newList)
    localStorage.setItem('data',JSON.stringify(newList))
  }

  const completeItem=(id)=>{
    let newList=starterData.map((element)=>{
      if(id==element.id){
        if(element.completed){
          element.completed=false;
        }else{
          element.completed=true;
        }
      }
      return element
    })
    setStarterData(newList)
    localStorage.setItem('data',JSON.stringify(newList))
  }

  const clearCompleted=()=>{
    let newList=starterData.filter((element)=>{
      return !element.completed
    })
    setStarterData(newList)
    localStorage.setItem('data',JSON.stringify(newList))
  }
  
  const filterFunc=(innerText)=>{
    if(innerText=='All'){
      setAll(true)
      setActive(false)
      setCompleted(false)
      setData(starterData)
      localStorage.setItem('location',JSON.stringify(innerText))
    }else if(innerText=='Active'){
      setAll(false)
      setActive(true)
      setCompleted(false)
      let aclist = [];
      starterData.forEach((element) => {
        if (!element.completed) {
          aclist.push(element);
        }
      });
      setActivelist(aclist)
      setData(activeList)
      localStorage.setItem('location',JSON.stringify(innerText))
    }else if(innerText=='Completed'){
      setAll(false)
      setActive(false)
      setCompleted(true)
      let complist = [];
      starterData.forEach((element) => {
        if (element.completed) {
          complist.push(element);
        }
      });
      setCompletedList(complist)
      setData(completedList)
      localStorage.setItem('location',JSON.stringify(innerText))
    }
  }

  useEffect(()=>{
    if(location=='All'){
      setAll(true)
      setActive(false)
      setCompleted(false)
      
    }else if(location=='Active'){
      setAll(false)
      setActive(true)
      setCompleted(false)
      let aclist = [];
      starterData.forEach((element) => {
        if (!element.completed) {
          aclist.push(element);
        }
      });
      setActivelist(aclist)
      setData(activeList)
    }else if(location=='Completed'){
      setAll(false)
      setActive(false)
      setCompleted(true)
      let complist = [];
      starterData.forEach((element) => {
        if (element.completed) {
          complist.push(element);
        }
      });
      setCompletedList(complist)
      setData(completedList)
    }
  },[])

  return (
    <Main className="App"  dark={dark}>
    
      <Img src={bg} alt="" />
      <Container>
        <Header>
          <h1>TODO</h1>
          {dark&& <img src={soon} onClick={()=>{setDark(false); localStorage.setItem('mode',JSON.stringify(false));}}/>}
          {!dark&& <img src={moon} onClick={()=>{setDark(true); localStorage.setItem('mode',JSON.stringify(true));}}/>}
        </Header>
        <Form dark={dark} onSubmit={(e)=>createItem(e)}>
            <img src={circleDark} alt="" />
            <input 
              type="text" 
              onChange={(e)=>{setText(e.target.value)}}
              placeholder='Create a new todo…' 
              value={text}
              />
        </Form>
        <Menu dark={dark}>
          <ul>
            {
              // data.length>0&&  data.map((element)=>{
              //   return (
              //     element && <Item element={element} deleteItem={deleteItem} key={element.id+element.text}/>
              //   )
              // })
              data.length>0&& data.map((element)=>{
                return (
                  <li 
                    key={element.id+element.text} 
                    // onClick={(ss)=>{completeItem(element.id)}}
                  >
                    {!element.completed&& <img onClick={(ss)=>{completeItem(element.id)}} src={circleDark} />}
                    {element.completed&& <img onClick={(ss)=>{completeItem(element.id)}} src={completedImg} />}
                    <div
                      style={{cursor:"pointer"}}
                      onDoubleClick={(ss)=>{completeItem(element.id)}}>
                      {!element.completed&& <p>{element && element.text}</p>}
                      {element.completed&& <p style={{textDecoration:'line-through',color:"#5f5959",cursor:"pointer"}}>{element && element.text}</p>}
                      <small>{element && element.createdAt}</small>
                    </div>
                    <CanselBTN src={x} onClick={(eee)=>{deleteItem(element.id);}} />
                  </li>
                );
              })
            }
          </ul>
          <Bottom dark={dark}>
            <small>{activeList.length} items left</small>
            <div onClick={e=>{filterFunc(e.target.innerText);}}>
              {!all&& <p style={{}}>All</p>}
              {all&& <p style={{color:'#3A7CFD'}}>All</p>}
              {!active&& <p>Active</p>}
              {active&& <p style={{color:'#3A7CFD'}}>Active</p>}
              {!completed&& <p>Completed</p>}
              {completed&& <p style={{color:'#3A7CFD'}}>Completed</p>}
             
            </div>
            <p 
              onClick={(ww)=>{clearCompleted()}}
              >Clear Completed</p>
          </Bottom>
        </Menu>
      </Container>
    </Main>
  )
}

export default App
