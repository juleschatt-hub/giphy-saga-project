import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css"

import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';



function App() {
  return (
    <div className="App">
    
    <Router>
    <div>
        <ul className="navbar">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
  
    <Route path="/" exact>

      <Search />search view


    </Route>
    <Route path="/favorites">
      <Favorites />
    </Route>
    </div>
    </Router>
  </div>

  );
}


export default App;
