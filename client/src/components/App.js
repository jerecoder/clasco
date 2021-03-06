import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import LoginButton from "./pages/LoginButton.js";
import "../utilities.css";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
<<<<<<< HEAD
import {BrowserRouter, Switch, Route} from 'react-router-dom';
=======
import "./pages/Login-Page.css"
>>>>>>> 30997567b585a3a463b419ca50ce7c4b2f53ded5

export default class App extends React.Component {
  render() {

return (
  <div className="fx-row high">
      <Sidebar url={ LoginButton }/>
    <div className="page fx-col fx-grow" style = {{ width : 150, height : 150, marginLeft : 450, marginTop : 100}}>

      <BrowserRouter>
       <Switch>
        
            <Route path='/demo' component={ Demo }/>
            <Route path='/audit' component={ Audits }/>
            <Route path='/SiteMange' component={ SiteManage }/>
            <Route path='/' component={ Login }/>
           
       </Switch>
    </BrowserRouter>
    
    </div>

    

    </div>

     
    )

    const dispatch = useDispatch(whyGo)
  }
}

// this is done, app as a class
//done
function App() {    
  return (
   <div className="app">

   </div>
);
}
export default App;
class App extends Component {
 
// makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    const ProtectedComponent = () => {
      if (authFails){
        return <Redirect to='/dash'  />
      }
      return <div> My Protected Component </div>
    }
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      //post("/api/initsocket", { socketid: 123 });

    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <> 
      <div className="title">
        <h1>Welcome to Clasco!</h1>
        <p>Education done different</p>
      </div>
      <div className="bttn">
        <Router>
          <LoginButton 
            path="/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <NotFound default />
        </Router>
        {/*here we should have a link for each class depending on the user id*/}
      </div>
      </>
 
    );
  }
}

export default App;
