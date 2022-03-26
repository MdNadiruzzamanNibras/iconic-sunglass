import './App.css';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 className='fs-1 text-color'>iConic sunGlass</h1>
      <h3>Choose 4 Sunglass</h3>
      <Shop></Shop>
      <h3>How  react works?</h3>
      <p>React is a library of javascript which build  user interfaces. It's use a special syntax called JSX that allows the writing of HTML. You have to add all the components in app.js this can be seen in the UI. Here all component is created  with the function.React is to open in UI code npm start type in cmd or vs code terminal.</p>
      <h3>How useState works?</h3>
      <p>useState is hook which allows a variable function component.It return a  value.It's pass value which another function can update the value. useState return a array.</p>
    </div>
  );
}

export default App;
