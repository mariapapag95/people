import React from 'react'
import {Link, Router} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

function NavBar(props) {
        return (
            <div className="navbar">
              <a className="navlinks" href = '/'>HOME</a>
              <a className="navlinks" href = '/people'>PEOPLE</a>
            </div>
        )
    }
export default NavBar;