import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Detail() {
  const [search,setSearch]=useSearchParams();
  const id = search.get('id');
  const title=search.get('title');
  const content=search.get('content');
  return (
    <ul>
        <button onClick={()=>setSearch('id=008&title=新的标题&content=新的内容')}>点我改变search</button>
      <li>消息编号:{id}</li>
      <li>消息标题:{title}</li>
      <li>消息内容:{content}</li>
    </ul>
  );
}
