import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/auth";

export function Navbar() {
  const {currentUser, setCurrentUser} = useContext(AuthContext);

  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`home`}>home</Link>
          <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={`home`}>home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`posts`}>posts</Link>
              </li>
            </ul>
          </div>
          {currentUser && (
              <>
                <p>Hello {currentUser.name}</p>
                <button onClick={() => setCurrentUser(null)}>sign out</button>
              </>
          )}
        </div>
      </nav>
  )
}
