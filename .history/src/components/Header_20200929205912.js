import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>


            <img className="header__logo" src="../img/amazonlogo.webp" alt="" />
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/* <SearchIcon className="header__searchIcon" /> */}
            </div>

        </div>
    )
}

export default Header
