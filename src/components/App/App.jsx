import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css"
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
      search view
    </Route>
    <Route path="/favorite">
      favorite view
    </Route>
    </div>
    </Router>
  </div>

  );
}


export default App;
