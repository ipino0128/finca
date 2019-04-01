import React, { Component } from 'react';
import HeaderLogo from '../components/HeaderLogo'
import NavBar from '../components/NavBar'
import {Route, Redirect, Switch} from 'react-router-dom'
import HomeContainer from './HomeContainer'
import AboutContainer from './AboutContainer'
import PhotosContainer from './PhotosContainer'
import SaleContainer from './SaleContainer'
import ProjectsContainer from './ProjectsContainer'
import Login from './Login'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }

  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      currentUser: null
    })
  }


  render() {
    return (
      <div className="App">
      <HeaderLogo/>
      <NavBar logged_in = {!!this.state.currentUser} logout = {this.logout}/>
      <Switch>
          <Route exact path = "/about" render = { () => <AboutContainer/>}/>
          <Route exact path = "/photos" render = { () => <PhotosContainer/>}/>
          <Route exact path = "/sale" render = { () => <SaleContainer/>}/>
          <Route exact path = "/projects" render = { () => <ProjectsContainer/>}/>
          <Route exact path = "/login" render = { () => <Login/> }/>
          
          <Route path = '/' render = {() => <HomeContainer/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
