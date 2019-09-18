import React , { useState } from 'react'
import PropTypes from 'prop-types';


const HeaderItem = (props) => {
    return(
        <a className={props.active ? "active" : ""} href={props.href} style={ props.customStyle } >{props.text}</a>
    )
}

HeaderItem.propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string,
    text:PropTypes.string,
    customStyle: PropTypes.object
}

const HeaderDropDown = (props) => {

    const { container , button , content } = props.customStyle || {}

    return(
        <div className="Dropdown-container" style={ container }>

            <button class="Dropdown-button" style={ button }>{props.text}</button>

            <div class="Dropdown-content" style={ content }>
                {props.children}
            </div>

        </div>
    )
}

HeaderDropDown.propTypes = {
    text:PropTypes.string,
    customStyle: PropTypes.object
}

const Header = (props) => {

    let [ responsive , setResponsive ] = useState(false)
    let responsiveClass = responsive ? "responsive" : ""
    let action = "javascript".concat(":void(0);")

    return(
        <div className={"Header-container " + responsiveClass} style={ props.customStyle }>
            {props.children}
            <a href={ action } class="icon" onClick={ ()=>{ setResponsive( !responsive ) }} >&#9776;</a>
        </div>
    )
}

Header.propTypes = {
    customStyle: PropTypes.object
}

export { HeaderItem , HeaderDropDown }
export default Header