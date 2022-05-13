import React from "react";
import { NavLink,Outlet } from "react-router-dom";
//这里的二级路由是通过路由表配置的
//二级路由的NavLink的to属性可以写全路径或者只写一个message，如果只写一个message，注意不要加/，可以写成./message
//如果想选中二级路由的时候一级路由不高亮，就在配置一级路由的NavLink标签中加上end
export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <ul className="nav nav-tabs">
        <li>
          <NavLink className="list-group-item" to="/home/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to="message">
            Message
          </NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}
