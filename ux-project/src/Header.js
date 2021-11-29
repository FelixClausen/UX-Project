import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <nav className="navbar navbar-light bg-gradient-light">
      {/* logo + name container */}
      <div className="container-fluid">
        <div className="navbar-brand" to="#">
          <p className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>brand<span>name</span>
          </p>
        </div>
        {/* navigation container */}
        <ul className="nav-item">
          <li>
            <p className="nav-link active" aria-current="page">Link</p>
          </li>
          <li className="nav-item">
            <p className="nav-link active" aria-current="page">Link</p>
          </li>
          <li className="nav-item">
            <p className="nav-link active" aria-current="page">Link</p>
          </li>
          <li className="nav-item">
            <p className="nav-link active" aria-current="page">Link</p>
          </li>
        </ul>
        {/* quick search container */}
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button type="button" class="btn btn-outline-dark">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Header;