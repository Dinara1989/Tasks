import Header from "./site/Header";
import Body from "./site/Body";
import Footer from "./site/Footer";
import Map from "./components/Map";
import Button from "./components/Button";
import Filter from "./components/filter/Filter";
import Hook from "./components/Hook";
import FullInput from "./components/inputUni/FullInput";
import React, {useState} from "react";

const students = [
  {id: 1, name:'Dinara', age: 35},
  {id: 2, name:'Hrayr', age: 43},
  {id: 3, name:'Rocky', age: 3}
]

const App = () => {
  const myFirstSubscriber = () => {
      console.log('Hello, Im Dinara')
  }
  const mySecondSubscriber = () => {
      console.log('Hello, Im Hro')
  }
  const foo1=()=> {
    console.log(100200)
  }
  const foo2=(num:number)=> {
    console.log(num)
  }
  const onClickHandler = (name:string) => {
    console.log(name)
  }
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

  return (
      <div>
          <Hook />
          <Button name={'Button 1'} callBack={()=>Button1Foo('Me Dinara', 35, 'from Ukraine')}/>
          <Button name={'Button 1'} callBack={()=>Button2Foo('Me Hro', 43, 'from Lebanon')}/>
          <Button name={'Stupid Button'} callBack={Foo3}/>
          <Header title={'First'}/>
          <Body titleBody={'Here is some content'}/>
          <Map students={students}/>
          <Footer titleFooter={'Here is some info about our company'}/>
          <button onClick={foo1}>1</button>
          <button onClick={() => foo2(10020)}>2</button>
          <button onClick={(event) => onClickHandler('Dinara')}> My YouTube Chanel 1</button>
          <button onClick={(event) => onClickHandler('Hro')}>My YouTube Chanel 2</button>
          <Filter />
          <FullInput />
      </div>
  );
};

export default App;