import React, { useState } from "react";
import { Link, Outlet, useInRouterContext, useNavigate, useNavigationType, useOutlet, useResolvedPath } from "react-router-dom";
export default function Message() {
  const navigate=useNavigate();
  //navigate里可以传两个参数，第一个是路径，第二个是一个配置对象，该对象有replace和state两个字段
  
  //新的钩子1：useInRouterContext 布尔值，判断当前组件是否被包裹在BrowserRouter或者HashRouter中
  //大多数组件都被包裹在其中，除非在index.js中它引入在了BrowserRouter或者HashRouter外
  console.log(useInRouterContext());
  //新的钩子2：useNavigationType 判断别人是怎么进入这个路由组件中的 有push replace pop三种 pop指前进或后退
  console.log(useNavigationType());
  //新的钩子3：useOutlet  显示本路由组件内的子路由组件信息 如果它的子路由组件还没被挂载 则返回null
  console.log(useOutlet());
  //新的钩子4：useResolvedPath  可以查看括号内写入的路由信息，返回一个对象，里面有pathname,search,hash三个字段
  console.log(useResolvedPath("id='007'&title='007title'&content='007content'"));

  function showDetail(m){
    navigate('detail',{
      replace:false,
      state:{
        id:m.id,
        title:m.title,
        content:m.content
      }
    })
  }
  const [messages] = useState([
    { id: "001", title: "消息1", content: "锄禾日当午" },
    { id: "002", title: "消息2", content: "汗滴禾下土" },
    { id: "003", title: "消息3", content: "谁知盘中餐" },
    { id: "004", title: "消息4", content: "粒粒皆辛苦" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              <Link
                to="detail"
                state={{ id: m.id, title: m.title, content: m.content }}
              >
                {m.title}
              </Link>&nbsp;&nbsp;&nbsp;
              <button onClick={()=>showDetail(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
