import React, { Component } from 'react';

import { Route, Router } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
//import { ProductIdEntry } from './components/ProductIdEntry';
//import { Search } from './components/Search';
//import { Bot } from './components/Bot';

import './App.css';
//import { WorkFlow } from './components/WorkFlow';
//import { AnalyticsQandA } from './components/AnalyticsQandA';
//import { AnalyticsRequest} from './components/AnalyticsRequest';
import { Form } from './components/Form';   
import {ListForm} from './components/ListForm'                                                                    
import history from './components/History';
import { bootstrapform } from './components/bootstrapForm';



class App extends Component {
  displayName = App.name

 render() {
      return (
       
      <div className="App">
        <Router history={history}>
     <Layout>
        <Route exact path='/' component={Home} />
                 
                  <Route path='/form' component={Form} />
                  <Route path='/bootstrapForm' component={bootstrapform}/>
                  <Route path='/listForm' component={ListForm}/>
              </Layout>
              </Router>
              </div>
    );
  }
  
   /*
                  <Route path='/search' component={Search} />
                  <Route path='/bot' component={Bot} />
                  <Route path='/analyticsQandA' component={AnalyticsQandA} />
                  <Route path='/analyticsRequest' component={AnalyticsRequest} />
                  <Route path='/workFlow' component={WorkFlow} />*/

}

export default App;