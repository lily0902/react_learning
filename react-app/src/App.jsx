import { useState } from 'react';
import './App.css';
function SecondComponent() { 
  //const [狀態變數, 修改函式] = useState(初始值);
  const [clicks,setClicks] = useState(0); 

  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks);
  }
  return(
  <>
      <h1> 傳組件 </h1>

      <button onClick={handleClick}>點擊次數:{clicks} </button>
      <SecondComponent2 clicks={clicks} />

  </>
  )
}

function SecondComponent2({clicks}) {
  return <div>{ clicks }</div>;
}


function MyComponent({ a, b = '王曉明', c }) { // 物件的解構賦值是以 {屬性名} 來取用資料的 順序可變
  const cc = true; 

  
  //function MyComponent(props) {
  //console.log(props);
  //props.c(); 
  c();

  return (
    <>
    <div className={`c ${cc ? 'a' : 'b'}`}> {/* true ? 'a c' : 'b c'*/} {/*``是javascript的用法*/} 
      {cc ? <h1>hello</h1> : <h1>world</h1>}
      {/*true && <h1>hello</h1>   當 && 左邊是 true 時, 回傳右邊的值, 反之則回傳左邊 */}
      </div>
      
      <div>{a}</div>
      <div>{b}</div>
    </>
  )
}


function App() {
  const text = 'hello world';
  const handleClick = (e) => {
    console.log(e);
  }

  const listItem = [
    { content: '張三', id: "abc" },
    { content: '李四', id: "efg" },
    { content: '王五', id: "hij" }
  
    /*
    <MyComponent key="0" />,
    <MyComponent key="1"/>,
    <MyComponent key="2"/>
    */
  ];

  const filterItem = listItem.filter((item) => {
    if (item.content !== '李四') {
      return true; //回傳true 的話該筆資料會被保留下來
    }
  })


  return (

    <>
      {
        filterItem.map((item) => {
          return <div key={item.id}> {item.content} </div>
        })
      }

      
      <button onClick={ handleClick }>我是按鈕</button>
      <input type="text" placeholder={text} />
      <h1>{text.toUpperCase()}</h1>
      
      <MyComponent a="mmm" c={() => { console.log(123); }} />
      
      {/*
      不同組件之間的state是獨立的, 互不影響
      */}
        
      <SecondComponent />
      <SecondComponent />
      <SecondComponent />

      {/*
      <MyComponent />
      <MyComponent />
      <MyComponent />
      */}
      
    </>

  )
}

export default App
