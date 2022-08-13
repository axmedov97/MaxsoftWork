import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className='header_content'>
          <div className='d-flex'>       
          <div className="navbar__logo">
            <a>
              <img src='Logo.svg'/> 
            </a>
          </div>
           <div className='search'>
            <form>
              <SearchIcon/>
              <input className='searchInput' type="text" placeholder = 'Search'/>
            </form>
          </div>            
          </div>

          <div className='navigations'>
            <li className='navItem'>
              <a ><img src='Bell.png'/></a>
              <a ><img className='avatar' src='Avatar.png'/> </a>
            </li>
          </div>           

        </div>
      </div>
    </>
  )
}
