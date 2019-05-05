import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  /* Reset */
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    height:100%;
  }
  body {
    background: ${({ theme: { colors } }) => colors.white01 };
    font: ${({ theme: { fonts } }) => fonts.family };
    letter-spacing: 0.05em;
    color: ${({ theme: { colors } }) => colors.gray01 };
  }
  h1,h2,h3 {
    text-transform: uppercase;
  }
  h1 {
    margin-top: 40px;
    font-size: ${({ theme: { fonts } })=> fonts.size.xg };
  }
  h2 {
    font-size: ${({ theme: { fonts } })=> fonts.size.lg };
  }
  h3 {
    font-size: ${({ theme: { fonts } })=> fonts.size.base };
  }
  /* Containers */
  .container,
  .container-hard {
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  .container {
    max-width: 970px;
    width: 100%;
  }
  .container-hard {
    width: 970px;
  }
  /* Grid */
  .row:after {
    content: ".";
    display: block;
    height: 0;
    font-size: 0;
    clear: both;
    visibility: hidden;
  }
  .row--center {
    text-align: center;
  }
  .row--relative {
    position: relative;
  }
  .row--right {
    text-align: right;
  }
  .row--middle {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
  }
  .row--middle .row__col {
    float: none;
  }
  .row--middle:after {
    display: none;
  }
  .row--1 > .row__col {
    width: 100%;
  }
  .row--1-2 > .row__col {
    width: 50%;
  }
  .row--1-13 > .row__col {
    width: 7.6923%;
  }
  .row__col {
    float: left;
    min-height: 1px;
  }
  @media screen and (max-width: 970px) {
    .row--xs-left {
      text-align: left;
    }
    .row--xs-right {
      text-align: right;
    }
    .row--xs-center {
      text-align: center;
    }
    .row--pad {
      padding-left: 20px;
      padding-right: 20px;
    }
    .row__xs-12 {
      float: none;
      width: 100% !important;
    }
  }
  @media screen and (min-width: 970px) {
    .row--sm-left {
      text-align: left;
    }
    .row--sm-right {
      text-align: right;
    }
    .row--sm-center {
      text-align: center;
    }
  }
`

export default globalStyle