import {css} from "@emotion/react";
import {Link} from "../atom/Link";
import React, {useState} from "react";
import {Text, Title} from "../atom/Typography";

interface INavHeader {
    children?: any
}

export const NavHeader = ({children}: INavHeader) => {
    //style
    let styleNavHeader = css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid gray;
      padding: 0rem 0;
      width: 100%;
      height: 10rem;


    `;
    //style end
    //animation

    //animation end
    //
    let [pressed, setPressed] = useState('')
    let LinkList = [
        {link: '/hello', pressed: false, text: "Main"},
        {link: '/about', pressed: false, text: "About Me"},
        {link: '/sandbox', pressed: false, text: "SandBox"},
        {link: '/fun', pressed: false, text: "FunStaff"},
    ]
    return <div css={styleNavHeader}>
        <div css={css`display: flex; align-items: flex-end; margin: 0 2rem`}>
            <Text size={'lg'} desktop>HI  I`am</Text><Title size={'lg'} desktop>A L E X</Title>
        </div>
        <div css={css`display: flex;
          justify-content: space-between`}>
            {LinkList.map(el => <Link cssProp={'margin: 0 3rem;'} linkTo={el.link} pressed={pressed}
                                      onClick={setPressed}>{el.text}</Link>)}
        </div>
    </div>
}