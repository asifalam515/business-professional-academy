import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import Home from "./component/Home/Home"
import Services from './component/Services/Services';



function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Home></Home>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
