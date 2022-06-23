import React from 'react'
import './Navbar.scss'

import Logo from './Logo'
import Search from './Search'
import RightHeader from './RightHeader'

const Navbar = () => {
    return (
        <header>
            <div className="hvd-wrapper">
                <Logo />
                <Search />
                <RightHeader />
            </div>
        </header>
    )
}

export default Navbar