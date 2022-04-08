import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import Home from "./component/Home/Home"
import Services from './component/Services/Services';
import About from './component/About/About';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
    <Route exact path="/">
  
<Home></Home>


</Route>
<Route exact path="/home">
  
<Home></Home>
</Route>
<Route path="/services">
<Services></Services>
</Route>
<Route path="/about">
<About></About>
</Route>
<Route path="/footer">
<Footer></Footer>
</Route>


    </Switch>

      </BrowserRouter>


      
      
      
      
      
     
    </div>
  );
}

export default App;
