import {css} from "@emotion/react";

interface IBgStart {
    children?: any
}

export const BgStart = ({children}: IBgStart) => {
    let styleBgStars = css`
      height: 500vh;
      overflow: hidden;
      opacity: 1;
      background-image: radial-gradient(#d1ceea 1.1px, transparent 1.1px), radial-gradient(#b5ffd4 1.1px, transparent 1.1px);
      background-size: 10rem 10rem;
      mix-blend-mode: soft-light;
      background-position: 0 0, 5rem 5rem;
    `
    let styleBgGradient = css`
      z-index: -1;
      position: absolute;
      top: 0;
      width: 100vw;
      height: 500vh;
      mix-blend-mode: soft-light;
      overflow: hidden;
      opacity: 1;
      background: linear-gradient(194deg, rgba(63, 59, 229, 1) 3%, rgba(63, 59, 229, 1) 3%, rgba(34, 25, 81, 1) 5%, rgba(22, 26, 87, 1) 19%, rgba(63, 59, 229, 1) 35%, rgba(52, 46, 174, 1) 46%, rgba(141, 41, 153, 1) 53%, rgba(31, 33, 117, 1) 61%, rgba(106, 33, 107, 1) 70%, rgba(225, 26, 105, 1) 84%, rgba(60, 188, 26, 0.6541491596638656) 87%, rgba(26, 26, 85, 1) 100%);
    `
    let styleBgGradient2 = css`
      height: 500vh;
      overflow: hidden;
      mix-blend-mode: soft-light;
      opacity: 1;

      background: radial-gradient(circle, rgba(63, 59, 229, 1) 0%, rgba(141, 41, 153, 1) 12%, rgba(34, 25, 81, 1) 22%, rgba(54, 22, 70, 1) 30%, rgba(22, 26, 87, 1) 46%, rgba(52, 46, 174, 1) 56%, rgba(31, 33, 117, 1) 61%, rgba(98, 151, 44, 0.5589110644257703) 72%, rgba(106, 33, 107, 1) 82%, rgba(26, 26, 85, 1) 100%);
    `
    let styleBlack = css`
      height: 500vh;
      overflow: hidden;
      mix-blend-mode: soft-light;
      background: black;
    `


    return (
        <div css={styleBgGradient}>
            <div css={styleBgGradient2}>
                <div css={styleBgStars}>
                    <div css={styleBlack}>
                        <div css={css`
                          display: grid;
                          grid-template-columns: repeat(10, 10vw);
                          grid-template-rows: repeat(10, minmax(10vw, 1vw));`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

interface IBgStars {
    children?: any
    bgHeight?: string
}

export const BgStars = ({children, bgHeight}: IBgStars) => {
    let styleBgStars = css`
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
      height: 500vh;
      overflow: hidden;

      opacity: 0;
      background-image: radial-gradient(hsla(234, 18%, 69%, 1) 2px, transparent 2px), radial-gradient(hsla(234, 60%, 69%, 1) 2px, transparent 2px);
      background-size: 200px 200px;
      background-position: 0 0, 100px 100px;
    `
    let styleBgGradient = css`
      z-index: -1;
      position: absolute;
      top: 0;
      width: 100vw;
      height: 500vh;
      overflow: hidden;
      opacity: 0.1;
      background: linear-gradient(194deg, rgba(63, 59, 229, 1) 3%, rgba(63, 59, 229, 1) 3%, rgba(34, 25, 81, 1) 5%, rgba(22, 26, 87, 1) 19%, rgba(63, 59, 229, 1) 35%, rgba(52, 46, 174, 1) 46%, rgba(141, 41, 153, 1) 53%, rgba(31, 33, 117, 1) 61%, rgba(106, 33, 107, 1) 70%, rgba(225, 26, 105, 1) 84%, rgba(60, 188, 26, 0.6541491596638656) 87%, rgba(26, 26, 85, 1) 100%);
    `
    let styleBgGradient2 = css`
      height: 1000vh;
      overflow: hidden;

      opacity: 0.8;
      background: radial-gradient(circle, rgba(63, 59, 229, 1) 0%, rgba(141, 41, 153, 1) 12%, rgba(34, 25, 81, 1) 22%, rgba(54, 22, 70, 1) 30%, rgba(22, 26, 87, 1) 46%, rgba(52, 46, 174, 1) 56%, rgba(31, 33, 117, 1) 61%, rgba(98, 151, 44, 0.5589110644257703) 72%, rgba(106, 33, 107, 1) 82%, rgba(26, 26, 85, 1) 100%);
    `
    let styleBgBlack = css`
      height: 500vh;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100vw;
      opacity: 1;
      z-index: -1;
      background: linear-gradient(200deg, #000000 0%, #434343 102.38%);


    `

    let styleBgWrapp = css`
      height: ${bgHeight};
    `
    return (<div css={styleBgWrapp}>
                    <div css={styleBgBlack}>
                        <div css={styleBgGradient}>
                        <div css={styleBgStars}>
                            {children}
                        </div>
                    </div>
                    </div>
        </div>
    )
}