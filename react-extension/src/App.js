// import Demo from "./components/1_setState";
// import Demo from "./components/2_lazyLoad";
// import Demo from "./components/3_hooks"
// import Demo from "./components/4_fragment";
import Demo from './components/5_context'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Demo />
    </BrowserRouter>
  );
}

export default App;
