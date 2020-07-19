import React from 'react';
import ChatList from './component/ChatList';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Landing from './component/Landing';


function App() {
  return (
    <Router>
      <div className="mt-4 pt-5">
        <Route exact path="/" component={Landing} />
        <Route exact path="/chat" component={ChatList} />
      </div>
    </Router>
  );
}

export default App;
