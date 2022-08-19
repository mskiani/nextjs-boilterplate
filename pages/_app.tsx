import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .progress-bar {
    background-color:#22d6ac;
    
  }
  .progress {
    height:40px;
  }
  .MuiInputBase-colorPrimary {
    border-color:pink;
  }
 
`;

const theme = {
  colors: {
    primary: "#pink",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
