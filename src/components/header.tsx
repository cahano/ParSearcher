//
// ParSearch public Navbar
//

import React from 'react'
import { NavLink } from "react-router-dom";

import { useAuth } from "../hooks/useAuth"


// Global NavBar Component
const NavBar: React.FC = () => {

    // Calling auth hook for navbar
    const { isAuthenticated, username } = useAuth();

  return (

    <nav id="navbar_parent">

        
        <NavLink to="/">
            <div id="psch_nav">
                <img id="psch_logo" src="../psch_logo_dark.png"/>
            </div>
        </NavLink>

        {/* Conditionally rendering login/logout */}
        {isAuthenticated ? (
            <NavLink to="/core" replace={true} className={"nactive"}>
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
