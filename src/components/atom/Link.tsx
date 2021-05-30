import {css} from "@emotion/react";
import {Link as LinkRoute} from "react-router-dom";
import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {Title} from "./Typography";

interface ILink {
    children: any
    cssProp?: string
    linkTo: string
    onClick: Dispatch<SetStateAction<string>>
    pressed: string
}

export const Link = ({children, cssProp, linkTo, onClick, pressed}: ILink) => {
    //animation
    let refWrapper = useRef<any>()
    let refText = useRef<any>()
    useEffect(() => {
        let wrapper = refWrapper.current
        let text = refText.current
        let oldShadow = '0.25rem -0.15rem 1px  rgba(255, 64, 255, 0.7) , -0.27rem -0.15rem 1px  rgba(64, 255, 255, 0.7) , 0rem 0.45rem 1px rgba(255, 255, 64, 0.7)'
        let newShadow = '0.40rem -0.40rem 1px  rgba(255, 64, 255, 1) , -0.40rem -0.40rem 1px  rgba(64, 255, 255, 1) , 0rem 0.50rem 1px rgba(255, 255, 64, 1)'
        let finalShadow = '0rem -0rem 0.2rem  rgba(255, 64, 255, 1) , 0rem -0rem 0.2rem   rgba(64, 255, 255, 1) , 0rem -0rem 0.2rem  rgba(255, 255, 64, 1)'
        let tl = gsap.timeline({})
        if (pressed === linkTo) {
            console.log('true')
            gsap.to(wrapper, {y: "0.8rem", duration: 0.3, ease: "elastic.in(1 , 0.3)"})
            gsap.to(text, {border: "2px solid purple", duration: 0.5})
            tl.to(text, {textShadow: newShadow, duration: 0.1, ease: "elastic.inOut( 1, 0.3)"})
                .to(text, {textShadow: oldShadow, duration: 0.5, ease: "elastic.inOut( 1, 0.3)"})
        } else if (pressed !== linkTo) {
            console.log('false')
            gsap.to(wrapper, {y: 0, duration: 0.7, ease: "power"})
            gsap.to(text, {border: "2px solid transparent", duration: 0.2})
            tl.to(text, {textShadow: newShadow, duration: 0.1, ease: "elastic.inOut( 1, 0.3)"})
                .from(text, {textShadow: newShadow, duration: 0.5, ease: "elastic.inOut( 1, 0.3)"})
                .to(text, {textShadow: finalShadow, duration: 0.2, ease: "elastic.in"})
        }
    })
    //animation end
    let handlerClick = () => {
        onClick(linkTo)
    }
    let styleTitle = css`
    ${cssProp};
    margin: 1rem`
    return <div ref={refWrapper} onClick={handlerClick}  >
        <LinkRoute to={linkTo}>
            <Title cssProp={styleTitle}
                refProp={refText} color={'black'} glitch
                mobile size={"lg"}
                bold>{children}
            </Title>
        </LinkRoute>
    </div>

}