import './App.css';
import AllBooks from './Components/AllBooks/AllBooks';
import UpdateBooks from './Components/UpdateBook/UpdateBooks';
import NewBook from './Components/NewBook/NewBook';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Books</Link>
              </li>
              <li className="navbar-item">
                <Link to="/books" className="nav-link">Add Book</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" exact element={<AllBooks />} />
          <Route path="/books" element={<NewBook />} />
          <Route path="/books/:id" element={<UpdateBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
