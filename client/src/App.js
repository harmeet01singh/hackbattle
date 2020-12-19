import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maincomponent from './components/MainComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <Maincomponent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
