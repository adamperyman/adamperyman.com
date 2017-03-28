import React from 'react'
import { Link } from 'react-router-dom'

import { TOP_NAV_LINKS } from '../../constants'

const TOP_NAV_LINKS_KEYS = Object.keys(TOP_NAV_LINKS)

const TopNav = () => (
  <div className='top-nav-wrapper'>
    {
      TOP_NAV_LINKS_KEYS.map(link => 
        <div className={`top-nav-${link}`}>
          <Link to={`${TOP_NAV_LINKS[link]}`}>
            <p>{link}</p>
          </Link>
        </div>      
      )
    }
  </div>
)

export default TopNav
