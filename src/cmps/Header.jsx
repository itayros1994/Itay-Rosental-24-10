import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="app-header">
            <span className="logo">Herolo Weather Task</span>
            <div>
            <div className="header-links">
                <span className="home-link"><Link to="/">home</Link></span>
                <span className="favorites"><Link to="/favorites">favorites</Link></span>
            </div>
            </div>
        </header>
    )
}