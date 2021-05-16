import './css/general.css'
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/Footer'


function App() {
  
  return (
    <Router>  
      <Header/>
        
      <Switch>
          <Route path="/" component={Home}/>

      </Switch>

      <Footer/>


      



    </Router>
  );
}

export default App;
