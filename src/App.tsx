import {SignUp} from './pages/signUp'
import {Login} from './pages/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Principal } from './pages';
import { useHistory } from 'react-router';

import { AuthProvider, useAuth } from './hooks/auth'

export function App() {
  const history = useHistory();
  function hendleSelect()  {
    history.push(`${'/Logado'}`)
  }
  const {logged} = useAuth()
  if (logged) {
    hendleSelect()
  }
  return (
    <div className="App">
        <Switch>   
          <Route exact path="/Logado" component={Principal}/>
          <Route exact path="/" component={Login}/>
          <Route exact path="/SignUp" component={SignUp}/>
      </Switch>
    </div>
  );
}

