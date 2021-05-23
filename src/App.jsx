import "bootstrap/dist/css/bootstrap.min.css";
import './css/general.css'
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/Footer'
import Login from './components/login/Login';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './components/dashboard/Dashboard';
import {auth} from './Firebase'
import { useState,useEffect } from 'react';

function App() {
  
  const [firebaseUser, setfirebaseUser] = useState(false)
  useEffect(()=>{
    /* este funcion se va a ejecutar cuando se hay un cambio en el usuario */
    auth.onAuthStateChanged(user=>{
      console.log(user)
      if(user){
        setfirebaseUser(user)
      }else{
        setfirebaseUser(null)
      }
    })
  },[])
  
  return firebaseUser!==false? (
    <Router>  
      
      <ScrollToTop/>
        
      <Switch>
          <Route path="/Login">
            <Login log={true}/>
          </Route>
          <Route path="/signUp">
            <Login log={false}/>
          </Route>
          
          <Route path="/dashboard" firebaseUser={firebaseUser} component={Dashboard}/>

          <Route path="/" >
              <Header/>
              <Home/>
              <Footer/>
          </Route>

     </Switch>

      


      



    </Router>
  ):(<h1>Cargando</h1>);
}

export default App;
