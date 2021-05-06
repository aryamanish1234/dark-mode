import React from 'react';
import styled from 'styled-components';

let Moon1, Moon;

Moon1 = Moon = styled.svg`
  position: absolute;
  top: 2rem;
  right: 4rem;
  transition: all .5s linear;
`;

export const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div onClick={toggleTheme}>
      { theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="black" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
      : 
      <Moon1 xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="yellow" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon1>}
    </div>
  )
}
