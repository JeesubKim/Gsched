import React from 'react';
import * as svg from './svg';

export type GIconType = keyof typeof svg
export type GIconProps = {
    name: GIconType
    className?:string
    style?:React.CSSProperties
}
function GIcon({name, className, style}:GIconProps){
    return React.createElement(svg[name], {
        className,
        style
    })
}

export default GIcon;