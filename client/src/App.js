import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <MainComponent />
      </div>
    </BrowserRouter> 
  );
}

export default App;
