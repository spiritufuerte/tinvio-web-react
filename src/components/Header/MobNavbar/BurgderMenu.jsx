import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import cn from "classnames";


 const StyledBurger = styled.div`
  width: 2rem;
  height: ${({open}) => open ? '2rem' : '17px'};
  position: ${({open}) => open ? 'fixed' : 'absolute'};
  top: 33px;
  right: 14px;
  z-index: 33;
  display: none;
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  .center_line {
  width:20px;
  height: 2px;
  }
  .top_line {
  width: 10px;
  height: 2px;
  }
  .bottom_line {
  width: 10px;
  height: 2px;
  margin-left: 10px;
  }
  .hidden{
  width:0px;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({open}) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({open}) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div className={cn(open ? 'line' : 'top_line')}/>
                <div className={cn(open ? 'hidden' : 'center_line')}/>
                <div className={cn(open ? 'line' : 'bottom_line')}/>
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}
export default BurgerMenu;