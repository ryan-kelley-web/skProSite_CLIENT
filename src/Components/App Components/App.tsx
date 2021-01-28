import React, { Component } from "react";
// import { FormspreeProvider } from '@formspree/react';

//COMPONS
import SKAuth from "../Auth Components/SKAuth";
import SKProfiles from "../User-Profile Components/SKProfiles";
import SKPublicSite from "../Public Site Components/SKPublicSite";
import SKAbout from "../Public Site Components/SKAbout";
import SKBlog from "../Public Site Components/SKBlog";
import SKContact from "../Public Site Components/SKContact";
import SKPrivateSite from "../Private Site Components/SKPrivateSite";
import SKDash from '../Private Site Components/SKDash';
import SKAdminDash from '../Private Site Components/SKAdminDash';
// import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

//BROWSER ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


// interface App_tsProps {
//   updateToken: (token: string) => void;
// }

interface App_tsState {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  token: string | null;
  showSKPriv: boolean;
  // bypassProfile: null | string;
}


//TS: < {_props_}, {_state_} >
class App extends React.Component<{}, App_tsState> {
  constructor(props: any) {
    super(props);

    //MUST BIND FUNCTIONS INSIDE CONSTRUCTOR... all functions???
    this.updateToken = this.updateToken.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.showSKPriv = this.showSKPriv.bind(this);
    // this.bypassProfile = this.bypassProfile.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      isAdmin: false,
      token: null,
      showSKPriv: false,
      // bypassProfile: null
    };
  }


  //TOKEN FUNCTIONS
  updateToken(userToken: string, profile: {} | null) {
    this.setState({ token: userToken });
    if (profile != null) {
      this.showSKPriv();
    }
  }

  deleteToken() {
    this.setState({ token: null });
  }

  getToken() {
    return this.state.token;
  }

  showSKPriv() {
    this.setState({ showSKPriv: true });
  }

  // bypassProfile() {
  //   this.setState({ bypassProfile: 'success' })
  // }


  render() {
    // if (this.state.bypassProfile) {
    //   return <Redirect to="/login" />
    // }
    return (

      <div>
        <Router>
          <div>
            <nav>
              <ul>

                <li>
                  <Link to="/">fSwS LOGO</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>

                <li>
                  <Link to="/LTTSblog">Letters to the Strong: the official fSwS Blog</Link>
                </li>

                <li>
                  <Link to="/login">fSwS Community Portal</Link>
                </li>

              </ul>
            </nav>
          </div>

          <Switch>

            <Route exact path="/">
              <SKPublicSite
                updateToken={this.updateToken} />
            </Route>

            <Route exact path="/about">
              <SKAbout updateToken={this.updateToken} />
            </Route>

            <Route exact path="/LTTSblog">
              <SKBlog updateToken={this.updateToken} />
            </Route>

            <Route exact path="/contact">
              <SKContact updateToken={this.updateToken} />
            </Route>

            <Route exact path="/login">
              {this.state.token && !this.state.showSKPriv ?
                <SKProfiles
                  token={this.state.token}
                  showSKPriv={this.showSKPriv} />
                :
                this.state.token && this.showSKPriv ?
                  <div>
                    <SKPrivateSite
                      updateToken={this.updateToken}
                      token={this.state.token} />
                    <SKDash
                      token={this.state.token} />
                    <SKAdminDash
                      token={this.state.token} />
                  </div>
                  :
                  <SKAuth updateToken={this.updateToken} />}


            </Route>

          </Switch>

        </Router>
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

            //WAS IN SWITCH BEFORE TRIPLE TERNARY
/* {this.state.showSKPriv ?
  <SKPrivateSite
    updateToken={this.updateToken}/> : null} */