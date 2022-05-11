import Count from "./Containers/Count"
// import store from "./redux/store";


//使用了react-redux时候，也不再需要传递通过props连接store了，具体功能转到了index.js中
// function App() {
//   return <Count store={store}/>;
// }

function App() {
  return <Count/>;
}

export default App;
