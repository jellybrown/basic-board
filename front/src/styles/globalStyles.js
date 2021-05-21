import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,body {
        padding:0;
        margin:0;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    a {
        color:#000;
    }
`

export default GlobalStyles;