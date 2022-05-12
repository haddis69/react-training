import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Demo(){
    const [count,setCount] = useState(0);

    //useRef就相当于类式组件的createRef
    const myRef=useRef();

    function add(){
        // setCount(count+1);
        setCount(count=>count+1);
    }
    function show(){
        console.log(myRef.current.value);
    }
    //关于useEffect的第二个参数：
    //如果不传，那就useState左侧所有参数都会监听他们的变化，一旦变化就会重新调用useEffect中的函数
    //如果传空数组，那就useState中的函数只执行一次，相当于componentsDidMount加对所有变量的componentDidUpdate
    //数组中如果有值,写了谁就监听谁的变化，相当于componentDidMount加对zhi指定变量的componentsDidUpdate
    //useEffect的回调函数的返回值(return部分)就相当于componentWillUnmount,可以不写
    useEffect(()=>{
        let timer =  setInterval(()=>{
            setCount(count+1);
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[count])
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    return(
        <div>
            <h1>当前和的值为：{count}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <input placeholder="打印ref的值" ref={myRef}></input>
            <button onClick={show}>打印ref的值</button>
        </div>
    )
}
export default Demo