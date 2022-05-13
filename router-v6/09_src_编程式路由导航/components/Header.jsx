import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  //版本6中弃用了withRouter(),无论是不是路由组件，都可以直接使用navigate函数
  //里面直接传数字进行前进或者后退，而不再需要go
  const navigate=useNavigate();
  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={()=>navigate(-1)}>后退←</button>
        &nbsp;
        <button onClick={()=>navigate(1)}>前进→</button>
      </div>
    </div>
  );
}
