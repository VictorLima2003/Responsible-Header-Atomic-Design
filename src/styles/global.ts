import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    @media (max-width: 850px) {
        html {
            font-size: 50%;
        }
    }
`;

export default globalStyle;
