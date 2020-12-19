import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
// import Maincomponent from './components/MainComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div>
          <Main/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter> 
    
  );
}

export default App;
