import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
// import Maincomponent from './components/MainComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'


function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <Maincomponent/>
      </div>
      <Footer/>
    </BrowserRouter> 
    
  );
}

export default App;
