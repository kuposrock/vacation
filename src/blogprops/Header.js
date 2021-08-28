import React from 'react';
import Navbar from './Navbar.js';

export default function Header() {

    return (
        <div className="header">
             <Navbar className="navbar"/>
             <h1 className="header">Clean Blog</h1>
             <p>A Custom Blog Theme by React</p>
        </div>
    )
}
