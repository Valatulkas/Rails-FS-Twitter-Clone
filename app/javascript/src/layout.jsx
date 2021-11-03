// layout.jsx
import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/"><span className="navbar-brand mb-0 h1">React in Rails Demo</span></a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/feed">Feed</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div>
          <span className="mr-3 text-secondary"><a href="https://github.com/Valatulkas" target="_blank" rel="noopener noreferrer">JFerg</a></span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;