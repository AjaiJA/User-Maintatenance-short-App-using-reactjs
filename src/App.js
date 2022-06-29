import './App.css';
import {Divider} from '@material-ui/core'
import TopNavBar from './Components/Nav/TopNavBar';
import Main from './Components/Structure/Main';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Divider/>
      <Main />
    </div>
  );
}

export default App;
