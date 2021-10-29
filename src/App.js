import './App.css';
import Change from './components/Change';
import {useSelector} from 'react-redux';


function App() {
  const themeColor = useSelector((state)=>state.theme.value);

  return (
    <div className="App" style = {{backgroundColor: themeColor}}>
      
      <h1>Ass</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nulla, a vitae natus ea suscipit, laudantium illo unde veniam ab odit cum temporibus explicabo ipsa quasi expedita quos delectus asperiores!</p>

      <Change/>
    </div>
  );
}

export default App;
