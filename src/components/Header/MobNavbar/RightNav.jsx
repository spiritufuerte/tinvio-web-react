import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: none;
  @media (max-width: 767px) {
  display: block;
  li {
    padding: 20px 0;
  }
  z-index: 30;
   list-style: none;
  display: flex;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:100%;
    max-width:767px;
    margin: 0;
    align-items: center;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({open}) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>Supplier</li>
            <li>About</li>
            <li>Contact</li>
        </Ul>
    )
}

export default RightNav;