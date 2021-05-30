import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {css} from "@emotion/react";
interface IULLi{
    children: any
}

export const ULLI = ({children}: IULLi) => {
    return <ul>
        {children}
    </ul>
}

