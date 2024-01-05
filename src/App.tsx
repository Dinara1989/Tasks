import React, {useState} from 'react';
import Header from "./site/Header";
import Body from "./site/Body";
import Footer from "./site/Footer";
import Component from "./components/Component";
import Button from "./components/Button";

const students = [
  {id: 1, name:'Dinara', age: 35},
  {id: 2, name:'Hrayr', age: 43},
  {id: 3, name:'Rocky', age: 3}
]
const App = () => {
  // const myFirstSubscriber = () => {
  //     console.log('Hello, Im Dinara')
  // }
  // const mySecondSubscriber = () => {
  //     console.log('Hello, Im Hro')
  // }
  const foo1=()=> {
    console.log(100200)
  }
  const foo2=(num:number)=> {
    console.log(num)
  }
  // const onClickHandler = (name:string) => {
  //   console.log(name)
  // }
// Universal Button
  const Button1Foo=(subscriber:string, age:number, address:string)=>{
      console.log(subscriber, age, address)
  }
  const Button2Foo=(subscriber: string, age:number, address:string)=>{
      console.log(subscriber, age, address)
  }
  const Foo3 =()=>{
        console.log('Im stupid button')
  }
  // Hook Use State
   let[a, setA]=useState(1)
    // a  is a state, setA is a function where a is existing
   //variant with props name
    const onClickHandler=(name:string)=>{
      if (name === 'add') {
          setA(++a);
      }
      if(name === 'zero') {
           setA(0);
      }
      if(name === 'minus') {
          setA(--a);
      }
   }

  return (
      <div>
          {/*Hook Use State*/}
          <div>
              <h2>{a}</h2>
              <button onClick={()=>onClickHandler('add')}> + </button>
              <button onClick={()=>onClickHandler('zero')}> 0 </button>
              <button onClick={()=>onClickHandler('minus')}> - </button>
          </div>
          {/*<Button name={'Button 1'} callBack={()=>Button1Foo('Me Dinara', 35, 'from Ukraine')}/>*/}
          {/*<Button name={'Button 1'} callBack={()=>Button2Foo('Me Hro', 43, 'from Lebanon')}/>*/}
          {/*<Button name={'Stupid Button'} callBack={Foo3}/>*/}
          {/*<Header title={'First'}/>*/}
          {/*<Body titleBody={'Here is some content'}/>*/}
          {/*//map method*/}
          {/*<Component students={students}/>*/}
          {/*<Footer titleFooter={'Here is some info about our company'}/>*/}
          {/*<button onClick={foo1}>1</button>*/}
          {/*<button onClick={() => foo2(10020)}>2</button>*/}
          {/*<button onClick={(event) => onClickHandler('Dinara')}> My YouTube Chanel 1</button>*/}
          {/*<button onClick={(event) => onClickHandler('Hro')}>My YouTube Chanel 2</button>*/}

      </div>
  );
};

export default App;