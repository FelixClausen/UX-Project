import './style.css';

function HeaderComp() {
  return (
    <header className="headerComp">
      <h1 className="logo">Brand<span>name</span></h1>
      <ul className="navLinks">
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
      <div className="quickSearch">
        <label>Search</label>
        <input className="searchInput"></input>
      </div>
    </header>
  );
}

export default HeaderComp;
