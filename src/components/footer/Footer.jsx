import React from "react";
import styled from "styled-components";
import logo from "../../assets/osm_logo.png";
import mbe from '../../assets/MBE.png'
import tjc from '../../assets/tjc.png'
import Button from "../Button";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="description">
              
            </p>
            
          </div>
          <ul>
            <li>10802 Farnam Drive, <br /> Omaha, NE 68154</li>
            <li>
              <span>3030 S Tech Blvd, <br /> Miamisburg, OH 45342 </span>
            </li>
            <li>
              <span>18167 US Highway 19N, Suite 405, Clearwater, FL 33764</span>
            </li>
            
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <Button text="Subscribe Now" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; Travel. Designed by <a href="#">Kishan Sheth</a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;
    gap: 5rem;
    .logo {
      img {
        width: 150px;
      }
    }
    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondary-text);
      h2 {
        color: black;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
          background-color: #f8f8f8;
        }
      }
    }
  }
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
    }
  }
`;