import React from "react";
import {css} from "@emotion/react";

interface ITest {
    children?: any
}


let style = css({
    background: "green",
})
export const Test = ({children}: ITest) => {
    return (<div css={style}>
        hello
    </div>)
}
