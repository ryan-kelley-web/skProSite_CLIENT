import React, { Component } from "react";
//COMPONS
import SKAuth from "../Auth Components/SKAuth";
import SKPublicSite from "../SKPublicSite";
import SKPrivateSite from "../SKPrivateSite";
import SKRegistration from "../Auth Components/SKRegistration";
import SKLogin from "../Auth Components/SKLogin";
//BROWSER ROUTER
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     <Route {...rest} render={(props) => (
//         Auth.isAuthenticated === true?
//         <Component {...props} /> : <Redirect to="/login"/>
//     )} />
// }

//TS: < {_props_}, {_state_} >
class App extends React.Component<{}, { token: string | null }> {
  constructor(props: any) {
    super(props);

    //BOUND FUNCTIONS
    this.updateToken = this.updateToken.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
    this.getToken = this.getToken.bind(this);

    this.state = {
      //  loggedInStatus: 'NOT_LOGGED_IN',
      //  user: {},
      token: null,
    };
  }

  //TOKEN FUNCTIONS
  updateToken(userToken: string) {
    this.setState({ token: userToken });
  }

  deleteToken() {
    this.setState({ token: null });
  }

  getToken() {
    return this.state.token;
  }

  render() {
    return (
      <div>

      <SKAuth updateToken={ this.updateToken } />

   
    </div>
    );
  }
}

export default App;

////PROPS
//can define & assign props underneath class extends... line, or, can define & assign inline using "".

//if prop values are known, establish props as attributes in App, then this.props.__attribute__ them in respective compon,
//if prop values are not known (dynamic), establish props btwn compon tags (in App), then this.props.children them in respective compon.

////STATE 1
//write out constructor, super, this.state={__key__:__value__}. then,
//within return(), this.state.__key__.

//to change state, add onClick={()=>this.__functionName__()} as an attribute w/in compon's return(),
//e.g., on a button or some other tag,
//then write the __functionName__ function after the constructor() and before the render(), beginning with this.setState( { __key__: __new value__}).

//////////////////////////////////////////////////////////////OLD CODE
//OLD APP RENDER(){RETURN()}
// <div className="App">
//     <SKRegistration />
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to="/public">Public Site</Link></li>
//                 <li><Link to="/private">Private aka Protected Site</Link></li>
//             </ul>

//             <Route path="/public" component={SKPublicSite} />
//             <Route path="/login" component={SKLogin} />
//             <PrivateRoute path='/private' component={SKPrivateSite} />

//         </div>
//     </Router>

// </div>

/*
                IGNORE--TRNG USE ONLY

                    <div className="App">
                    <h1>App Demo</h1>
                     <Navbar name="test prop 0" anotherProp="is great">
                        <p>children prop method demo</p>
                    </Navbar>

                    <Navbar name="test prop 1">
                        <button>Action Jack</button>
                    </Navbar>

                    <Navbar name="test prop 2">
                    </Navbar>

                    <Login/>
                    <SetStateTut/>
                    </div>
            */
