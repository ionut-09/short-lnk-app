import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';

import Signup from '../ui/Signup';
import Links from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
       const pathname = window.location.pathname;
  
       const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
       const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
       if(isUnauthenticatedPage && isAuthenticated){
      
           window.location.pathname = '/links';
      
      } else if (isAuthenticatedPage && !isAuthenticated){
          window.location.pathname = '/';
       }
};

export const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/links" component={Links}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    );
    
