import './App.css';
// import Todo from './Components/Todo';
import Card from './Components/Card';
import Data from "./Components/CardData.json"

function App() {
  console.log(Data);
  return (
    <div className="App">
      {/* <Todo/> */}
      <Card data={Data} key={Date.now()}/>
    </div>
  );
}

export default App;
