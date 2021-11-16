import { createContext, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from '@chrishontoir/use-fetch';

import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LogInPage';

import './App.css';

import { Context } from './Context';

const App = () => {
  const [auth, setAuth] = useState({ token: null, expiry: 0 });
  const value = useMemo(() => ({ auth, setAuth }), [auth])
  const [loading, data, error, request] = useFetch();

  useEffect(() => {
    let refreshTimeout
    if (auth.expiry !== null) {
      refreshTimeout = setTimeout(() => {
        request(`https://35.234.137.78:3001/refresh`, {})
      }, auth?.expiry)
    }
    return () => clearTimeout(refreshTimeout)
  }, [auth]);

  useEffect(() => {
    (error && setAuth({ token: null, expiry: null}))
    || (data && setAuth(data));
  }, [data]);

  return (
    <div className='App'>
      <Context.Provider value={value}>
        <Router>
          <ErrorBoundary errorComponent={<ErrorPage />}>
            <Switch>
              <Route path='/' render={() => auth?.token
                ? <HomePage />
                : <LandingPage />
              } exact />
              <Route path='/login' render={() => <LogInPage />} exact />
              <Route path='/' render={() => (
                <ErrorPage preMessage='404' message='Page not found.' />
              )} />
            </Switch>
          </ErrorBoundary>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
