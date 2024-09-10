import React from 'react'

import {header_menus, search_keyword} from '../../data/header'
import {Link, useLocation} from 'react-router-dom'

const Menu = () => {
  const location = useLocation();

  return (
    <nav className='header__menu'>
      <ul className='menu'>
        {header_menus.map((menu, key) => (
          <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
            <Link to={menu.src}>
              {menu.icon} {menu.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className='keyword'>
        {search_keyword.map((keyword, key) => (
          <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
            <Link to={keyword.src}>
              {keyword.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu