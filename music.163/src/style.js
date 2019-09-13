import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6,
p, blockquote, pre, a, abbr, address, big, code, img, ul, ol, li, form,
table, thead, th, tbody, tfoot, tr, td, nav{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
ol, ul{
    list-style: none;
}
a{
    text-decoration: none;
	color: #fff;
}
`;