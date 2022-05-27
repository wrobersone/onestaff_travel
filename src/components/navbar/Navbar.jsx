import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/osm_logo.png'
import { BsPerson } from 'react-icons/bs'
import { IoSearchOutline } from 'react-icons/io5'
 
export default function Navbar() {
  return (
    <Nav>
        <div className='brand'>
          <img src={logo} alt="" />
        </div>
        <div className="toggle"></div>
        <div className="links">
          <ul>
            <li><a href="">Services</a></li>
            <li><a href="">Destinations</a></li>
            <li><a href="">Offers</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Tours</a></li>
          </ul>
        </div>
        <div className="account-info">
          <div className="account">
            <span>
              <BsPerson />
            </span>
            <span>My Account</span>
          </div>
          <div className="search">
            <IoSearchOutline />
          </div>
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    img {
      cursor: pointer;
      width: 150px;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: black;
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .account-info {
    display: flex;
    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
`;
