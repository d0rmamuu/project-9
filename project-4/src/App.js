import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Contact from "./component/Page/Contact/Contact";
import Login from "./component/Page/Login/Login";
import Error from "./component/Page/PageNotFound/Error";
//import Navbar from "./component/Navbar";
import Header from "./component/Header/Header";
//import TimeFetch from "./component/TimeFetch";
import Profile from './component/Page/Profile/Profile';
import Home from "./component/Page/Home/Home";
import Footer from "./component/Footer/Footer";
import Course from "./component/Course/Course";

const App =() => {
  return(
    <>
    <Header/>
    <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/login" component={Login}/>
      <Route path="/course" component={Course}/>
      <Route component={Error}/>
    </Switch>
    </div>
    <Footer/>
    </>
  )
}
export default App;