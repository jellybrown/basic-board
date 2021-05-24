import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,body {
        padding:0;
        margin:0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    ul,p {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    a {
        color:#000;
    }
    h1,h2 {
        font-size: 1rem;
        font-weight: 500;
        margin:0;
        padding:0;
    }
`;

export default GlobalStyles;
