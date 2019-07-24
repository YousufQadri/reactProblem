import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Home from './component/screen/home'
import About from './component/screen/about'
import Contact from './component/screen/contact'

class App extends Component {
//using state
  state = {
    screenName: "Home"
  }

 //update screen name for using arrow function
 
 updateScreenName = (value) => {
   this.setState({screenName: value})
 }

  render(){
 
      const { screenName } = this.state;
     
    return(
      <div className="App">
        <Header changeScreen={this.updateScreenName} currentScreen={screenName} />
         { screenName === "Home" && <Home /> }
         { screenName === "About" && <About/> }
         { screenName === "Contact" && <Contact/> }       
         </div>
    );
  }
}

export default App;
