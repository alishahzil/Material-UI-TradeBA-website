import './App.css';
import Appbar from './component/AppBar/Appbar'
import Allcontent from './component/Contant/Appcontent'


function App(props) {
  return (
    <div className="App">
      <Appbar />

      <Allcontent />
    </div>
  );
}

export default App;
