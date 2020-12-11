import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat.js';
import Sidebar from './components/Sidebar/Sidebar.js';

import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className='app_body'>
          <Router>
              <Sidebar/>
              <Switch>
                <Route path='/rooms/:RoomId'>
                  <Chat/>
                </Route>
                <Route path='/'>
                  <Chat/>
                </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
