import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './pages/Auth/LoginForm';
import SignupForm from './pages/Auth/SignupForm';
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import AUTH from './utils/AUTH';
import ProfileDash from './pages/ProfileDash';
import Connections from './pages/Matching';
import Posts from './pages/Posts';
import Profile from './pages/ProfileSetGen';
import PostSelect from './pages/PostSelect';



import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    AUTH.getUser().then(response => {
        // console.log(response.data);
        if (!!response.data.user) {
          setLoggedIn(true);
          setUser(response.data.user);
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      });

      return () => {
        setLoggedIn(false);
        setUser(null);
      };
  }, []);

	const logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			// console.log(response.data);
			if (response.status === 200) {
				setLoggedIn(false);
        setUser(null);
			}
		});
	};

	const login = (username, password) => {
		AUTH.login(username, password).then(response => {
      console.log(response.data);
      if (response.status === 200) {
        // update the state
        setLoggedIn(true);
        setUser(response.data.user);
      }
    });
	};

  return (
    <div className="App">
      { loggedIn && (
        <div>
          <Nav user={user} logout={logout}/>
          <div className="main-view">
            <Switch>
              <Route exact path="/" component={() => <ProfileDash/>}/>
              {/* <Route component={NoMatch} /> */}
              {/* <Route exact path="/matching" component={Connections} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/dashboard" component={ProfileDash} />
              <Route exact path="/profilesetgen" component={Profile} />
              <Route exact path="/postselect" component={PostSelect} /> */}
            </Switch>
          </div>
        </div>
      )}
      { !loggedIn && (
        <div>
          <Route exact path="/" component={() => <LoginForm login={login}/>} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/dashboard" component={() => <LoginForm user={login} />} />
          <Route exact path="/postselect" component={() => <LoginForm user={login} />} />
          <Route exact path="/posts" component={() => <LoginForm user={login} />} />
          <Route exact path="/dashboard" component={() => <LoginForm user={login} />} />
          <Route exact path="/matching" component={() => <LoginForm user={login} />} />
          <Route exact path="/profilesetgen" component={() => <LoginForm user={login} />} />
          <Route exact path="/profilesetnet" component={() => <LoginForm user={login} />} />
        </div>
      )}
    </div>
  );
}

export default App;
