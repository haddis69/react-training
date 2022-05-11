import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



//在使用了react-redux最后，不用再监听store的变化了，即不需要再store.subscribe了，转而使用了provider
// provider的意义是，provider很智能的会把store作为props传给需要连接store的组件，包裹最外层的App就可以了

// store.subscribe(() => {
//   root.render(<App />);
// });
