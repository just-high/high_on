import {css} from "@emotion/react";
import {FC} from "react";
import {styleGlitch} from "../animation/glitch";

type sizeTypeTitle = "lg" | "md" | "sm"

interface ITitle {
    children?: string
    size: sizeTypeTitle
    color?: string
    bold?: boolean
    mobile?: boolean
    desktop?: boolean
    cssProp?: any
    glitch?: any
    refProp?:any
}

export const Title = ({children, size, color, bold, mobile, desktop, cssProp, glitch,refProp}: ITitle) => {
    if (mobile && desktop) alert('mobile ore desktop. only one attr for Typography.tsx')
    if (!mobile && !desktop) alert('mobile ore desktop. only one attr for Typography.tsx')
    let styleTypo = css`
      font-family: Poppins, serif;
      border-radius: 3px;
      font-style: normal;
      color: ${color || "hsla(233, 26%, 88%, 1)"};
      font-weight: ${bold ? '200' : '400'};
      letter-spacing: 0.1rem;
      padding: 0 1rem;
    `
    let styleTitleLg = css`
      ${styleTypo};
      ${mobile ? "font-size: 6.4rem; line-height: 6.6rem;" : null}
      ${desktop ? "font-size: 4.8rem; line-height: 5rem;" : null}
      text-align: left;
     
      ${glitch ? styleGlitch : null}; ${cssProp};
    `
    let styleTitleMd = css`
      ${styleTypo};
      ${mobile ? "font-size: 3.2rem; line-height: 3.6rem;" : null}
      ${desktop ? "font-size: 4.8rem; line-height: 5rem;" : null}
      text-align: left;
      ${cssProp};
    `
    let styleTitleSm = css`
      ${styleTypo};
      ${mobile ? "font-size: 2.4rem; line-height: 3.2rem;" : null}
      ${desktop ? "font-size: 3.2rem; line-height: 3.4rem;" : null}
      text-align: left;
      ${cssProp};
    `

    switch (size) {
        case "lg":
            return <h1 ref={refProp} css={styleTitleLg}>{children}</h1>
        case 'md':
            return <h2 ref={refProp} css={styleTitleMd}>{children}</h2>
        case 'sm':
            return <h3 ref={refProp} css={styleTitleSm}>{children}</h3>
    }
}

type sizeTypeText = "lg" | "md" | "sm" | "xs"

interface IText {
    children?: string
    size: sizeTypeText
    color?: string
    bold?: boolean
    mobile?: boolean
    desktop?: boolean
}

export const Text = ({children, size, color, bold, mobile, desktop}: IText) => {
    if (mobile && desktop) alert('mobile ore desktop. only one attr for Typography.tsx')
    let styleTypo = css`
      font-family: Poppins, serif;
      font-style: normal;
      color: ${color || "hsla(233, 26%, 88%, 1)"};
      font-weight: ${bold ? '200' : '400'};
      letter-spacing: 0.075rem;
    `
    let styleTextLg = css`
      ${styleTypo};
      ${mobile ? "font-size: 2rem; line-height: 3.2rem;" : null}
      ${desktop ? "font-size: 24px; line-height: 38px;" : null}
    `
    let styleTextMd = css`
      ${styleTypo};
      font-size: 4.8rem;
      line-height: 5rem;
      text-align: left;
      ${mobile ? "font-size: 1.6rem; line-height: 2.8rem;" : null}
      ${desktop ? "font-size: 18px; line-height: 34px;" : null}
    `
    let styleTextSm = css`
      ${styleTypo};
      ${mobile ? "font-size: 1.4rem; line-height: 2.4rem;" : null}
      ${desktop ? "font-size: 16px; line-height: 28px;" : null}
    `
    let styleTextXs = css`
      ${mobile ? "font-size: 1.3rem; line-height: 2.2rem;" : null}
      ${desktop ? "font-size: 14px; line-height: 24px;" : null}
      font-weight: ${bold ? '300' : '400'};
    `

    switch (size) {
        case "lg":
            return <p css={styleTextLg}>{children}</p>
        case 'md':
            return <p css={styleTextMd}>{children}</p>
        case 'sm':
            return <p css={styleTextSm}>{children}</p>
        case 'xs':
            return <p css={styleTextXs}>{children}</p>
    }
}