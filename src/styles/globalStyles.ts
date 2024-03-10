import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --main-color-100: #e2fdff;
        --main-color-200: #bfd7ff;
        --main-color-300: #9bb1ff;
        --main-color-400: #788bff;
        --main-color-500: #5465ff;

        --font-size-100: 3rem;
        --font-size-200: 2.8rem;
        --font-size-300: 2.6rem;
        --font-size-400: 2.3rem;
        --font-size-500: 2rem;
        --font-size-600: 1.8rem;
        --font-size-700: 1.6rem;

        --white-color-100: #fff;
        --white-color-200: #f4f4f4;
        --white-color-300: #f7f7f7;
        --white-color-400: #ddd;
        --white-color-500: #c0c0c0;
        --white-color-600: #bdbdbd;
        --white-color-700: #b5b5b5;
        --white-color-800: #000;
    }

    @font-face {
        font-family: "Pretendard";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }

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
	html {
        font-family: "Pretendard";
        font-size: 62.5%;
	}
	img {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
    button {
		all: unset;
		cursor: pointer;
	}
`;

export const CommonButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 35px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--main-color-300);
  font-size: var(--font-size-400);

  &:hover {
    background-color: var(--main-color-400);
  }
`;

export const CommonInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 10px;
  outline: none;
  border: 1px solid var(--white-color-700);
  border-radius: 10px;

  &:focus {
    outline: none;
    outline: 1px solid var(--main-color-500);
  }
`;
