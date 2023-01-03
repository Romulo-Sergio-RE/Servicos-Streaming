import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 16px;
    }
    body{
        background: var(--color-first);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --color-first: #22345D;
        --color-second: #11113E;
        --color-third: #6DC8DF;
        --color-fourth: #FFFFFF;

    }
`
;