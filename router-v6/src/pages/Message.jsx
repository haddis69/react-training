import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function Message() {
  const navigate=useNavigate();
  //navigate里可以传两个参数，第一个是路径，第二个是一个配置对象，该对象有replace和state两个字段
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
