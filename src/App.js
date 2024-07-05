import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Window, styleReset, WindowContent, WindowHeader, Button, Toolbar, } from 'react95';

import blackAndWhite from 'react95/dist/themes/blackAndWhite';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';




const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
   p {
    max-width: 600px;
  }
`;



const App = () => (

  <>
    <style>
      {`
        .responsive-container {
          display: flex;
          align-items: flex-start;
          height: 100vh;
          padding: 5rem;
          flex-direction: column; 
        }
        @media (min-width: 1200px) { 
          .responsive-container {
            flex-direction: row; 
            align-items: flex-start;
          }
            
      }
    }
        }
      `}
    </style>

    <ThemeProvider theme={blackAndWhite}>
      <GlobalStyles />
      <div className="responsive-container">
        <div>
        <Window className="window" style={{ maxWidth: '960px', margin: '2em' }}>
          <WindowHeader className="window-header">
            <span>Di Xu.exe</span>
          </WindowHeader>
          <WindowContent>
            <PersonalInfo />
            <Experience />
            <Education />
          </WindowContent>
        </Window>
        </div>
        <div>
        <Window className="window" style={{ maxWidth: '960px', margin: '2em' }}>
          <WindowHeader className="window-header">
            <span>Projects.exe</span>
          </WindowHeader>
          <Projects />

        </Window>
        
        </div>
      </div>
    </ThemeProvider>

  </>
);


export default App;