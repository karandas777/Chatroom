import React from 'react';
import ChatList from './component/ChatList';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Landing from './component/Landing';
import Technology from './component/Technology';
import Food from "./component/Food";
import Traveling from './component/Traveling';
import Politics from './component/Politics';
import Header from './component/Header';

function App() {
  return (
    <Router>
      <Header/>
        <Route component={Header}/>
        <Route exact path="/" component={Landing} />
        <Route exact path="/chat" component={ChatList} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/traveling" component={Traveling} />
        <Route exact path="/politics" component={Politics} />
    </Router>
  );
}

export default App;
