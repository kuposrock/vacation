import React from 'react';
import Navbar from './Navbar.js';

export default function Header() {

    return (
        <div className="header">
             <Navbar className="navbar"/>
             <div className="headerContainer">
             <h1 className="headerTitle">Clean Blog</h1>
             <p className="headerP">A Custom Blog Theme by React</p>
             </div>
        </div>
    )
}
