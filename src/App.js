import Axios from "./component/axios";
import "./App.css";
import { Counter } from "./component/counter";

const App = () => {
  return (
    <>
      <h3>Hi axios and redux toolkit</h3>
      <Axios />
      <br />
      <br />
      <Counter />
    </>
  );
};

export default App;
