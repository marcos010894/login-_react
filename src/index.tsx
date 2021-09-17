import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App }  from './App';
import { AuthProvider, useAuth } from './hooks/auth'

ReactDOM.render(
  <Router>
    <AuthProvider>
    <App></App>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);