//
// ParSearch public Navbar
//

import React from 'react'
import { NavLink, useLocation } from "react-router-dom";

import { PRIVATE_ROUTES } from "../consts/consts"
import { useAuth } from "../hooks/useAuth"


// Global NavBar Component
const NavBar: React.FC = () => {

    // Calling auth hook for navbar
    const { isAuthenticated, username } = useAuth();

    // calling use location to render header based on current pages
    const location = useLocation();

    // Navbar for PRIVATE pages
    if (PRIVATE_ROUTES.indexOf(location.pathname) > -1) {

        return (
            <nav id="navbar_parent">

                <NavLink to="/">
                    <div id="psch_nav">
                        <img id="psch_logo" src="../psch_logo_dark.png"/>
                    </div>
                </NavLink>
                
                <NavLink to="/landing" className={"nactive"}>
                    <div id="login_nav">
                        <button>{username}</button>
                    </div>
                </NavLink>

            </nav>
        )

    }

  // Navbar for PUBLIC pages
  return (

    <nav id="navbar_parent">

        
        <NavLink to="/">
            <div id="psch_nav">
                <img id="psch_logo" src="../psch_logo_dark.png"/>
            </div>
        </NavLink>

        {/* Conditionally rendering login/username */}
        {isAuthenticated ? (
            <NavLink to="/landing" className={"nactive"}>
                <div id="login_nav">
                    <button>{username}</button>
                </div>
            </NavLink>
        ) : (
            <NavLink to="/login" className={"nactive"}>
                <div id="login_nav">
                    <button>Client Login</button>
                </div>
            </NavLink>
        )}

        <NavLink to="/team" className={"nactive"}>
            <div id="team_nav">
                <button>Team</button>
            </div>
        </NavLink>

        <NavLink to="/inquire" className={"nactive"}>
            <div id="inquire_nav">
                <button>Inquire</button>
            </div>
        </NavLink>

        <NavLink to="/solutions" className={"nactive"}>
            <div id="sol_nav">
                <button>Solutions</button>
            </div>
        </NavLink>

    </nav>

  );
}


export default NavBar
