import React from 'react';
import ChatList from './component/ChatList';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Landing from './component/Landing';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/chat" component={ChatList} />
    </Router>
  );
}

export default App;
