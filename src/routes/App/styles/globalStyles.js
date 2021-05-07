import './_app.scss';
import   './_dark-mode.scss'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }

  p {
    line-height: 1.4rem;
  }
  .title-sec {
    color: ${({ theme }) => theme.sec};
    font-size: 2rem;
  }

  .button.is-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    height: 30px;
    width: 100px
    border-color: #dbdbdb;
    border-width: 2px;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 2px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 2px);
    text-align: center;
    white-space: nowrap;
  }
  .button.is-link
  {
    background: ${({ theme }) => theme.link};
    color: ${({ theme }) => theme.body};
    height: 30px;
    width: 100px
    border-color: #dbdbdb;
    border-width: 2px;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 2px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 2px);
    text-align: center;
    white-space: nowrap;

  }
  .input .textarea {
    background-color: ${({ theme }) => theme.input};
    color: ${({ theme }) => theme.textarea};
  }

.sc-bdnxRM .ezFNyZ .feather.feather-moon {
 
}
.ezFNyZ
{
  top: 10rem;
  right: 15rem;
}
`;

export const lightTheme = {
  body: 'hsl(0, 0%, 90%);',
  text: '#121212',
  primary: ': #8a4d76',
  input:"white",
  textarea:"black",
  moon:"",
};


export const darkTheme = {
  body: '#121212',
  text: '#fff',
  primary: '#bb86fc',
  sec:'#BB86FC',
  link: "#03DAC6",
  input:" -internal-light-dark(white, black)",
  moon:""
};