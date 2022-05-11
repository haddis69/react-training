import Count from "./Containers/Count"
import store from "./redux/store";
function App() {
  return <Count store={store}/>;
}
export default App;
