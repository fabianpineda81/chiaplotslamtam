import './css/general.css'
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/Footer'
import Login from './components/login/Login';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  
  return (
    <Router>  
      
      <ScrollToTop/>
        
      <Switch>
          <Route path="/Login">
            <Login log={true}/>
          </Route>
          <Route path="/signUp">
            <Login log={false}/>
          </Route>
          
          <Route path="/dashboard" component={Dashboard}/>

          <Route path="/" >
              <Header/>
              <Home/>
              <Footer/>
          </Route>

     </Switch>

      


      



    </Router>
  );
}

export default App;
