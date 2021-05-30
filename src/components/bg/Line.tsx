import React from "react";
import {css} from "@emotion/react";

interface ILine {
    children?: any
}

export const Line = ({children}: ILine) => {
    let styleLine = css`
      :after {
        z-index: 2;
        display: block;
        content: '';
        background: red;
        width: calc(1.4142135623730950488016887242097*10vw);
        transform: rotate(-135deg);
        height: 0;
        border: 1px solid red;
      }`;
    return <div css={styleLine}>

    </div>
}