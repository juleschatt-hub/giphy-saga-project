import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css"

import Search from '../Search/Search';
import FavoriteView from '../Favorites/Favorites';



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
            <Link to="/favorite">Favorites</Link>
          </li>
        </ul>
  
    <Route path="/" exact>

      <Search />search view


    </Route>
    <Route path="/favorite">
      <FavoriteView/>
    </Route>
    </div>
    </Router>
  </div>

  );
}


export default App;
