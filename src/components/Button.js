import React from 'react'

export const Button = (props) =>{

    let buttonClass = props.primary ? "button primary" : "button"
    // concat string to avoid warning
    let link = props.href ? props.href : "javascript".concat(":void(0);")

    return(
        <a className={buttonClass} onClick={()=>{props.action(props.id)}} href={link} style={ props.customStyle }>
            <div>
                {props.text}
            </div>
        </a>
    )
}