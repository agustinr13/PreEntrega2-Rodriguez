import React from 'react'
import { Link } from 'react-router-dom'
import BrandImage from './BrandImage'
import CartWidget from './CartWidget'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to={'/'}>
            <BrandImage/>
        </Link>
        <ul>
            <li>
                <Link to={'/category/sillas'}>Sillas</Link>
            </li>
            <li>
                <Link to={'/category/mesas'}>Mesas</Link>
            </li>
            <li>
                <Link to={'/category/sillones'}>Sillones</Link>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar