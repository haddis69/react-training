import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Home() {
  const [sum,setSum] = useState(0);
  return (
    <div>
       <h3>我是Home的内容</h3>
       {sum===2?<Navigate to='/about'/>:<h4>当前sum的值为:{sum}</h4>}
       <button onClick={()=>setSum(2)}>点我把sum值变为2并跳转到About</button>
    </div>
  )
}
