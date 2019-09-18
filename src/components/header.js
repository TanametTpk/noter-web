import React from 'react'
import PropTypes from 'prop-types';

const HeaderItem = (props) => {

    const { justifyContent , style } = props

    return(
        <div className={"header-item"} style={{ justifyContent ,...style}}>
            {props.children}
        </div>
    )

}

HeaderItem.propTypes = {
    justifyContent: PropTypes.string,
    style: PropTypes.object
}

const HeaderZone = (props) => {

    const size = props.size || 1
    let smallPadding = {padding:0 , paddingRight:0 , paddingLeft:0 , paddingBottom:0}

    const {padding , paddingRight , paddingLeft , paddingBottom} = window.innerWidth <= 500 ? smallPadding : props

    let position = ""

    switch (props.position) {
        case "center":
            position = "header-unlimited-position-center"
            break;
        case "right":
            position = "header-unlimited-position-end"
            break;
        default:
            position = ""
            break;
    }

    return(
        <div 
            className={"header-zone-" + size + " header-unlimited-item " + position}
            style={{
                backgroundColor:props.color ,
                padding ,
                paddingRight ,
                paddingLeft ,
                paddingBottom
            }}
        >
            {props.children}
        </div>
    )

}

HeaderZone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    padding: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingBottom: PropTypes.string,
    position:PropTypes.string
}

const Header = (props) => {

    const shadow = props.shadow ? " shadow" : ""
    const floatClass = props.isFloat ? " header-container-float" : ""
    const height = props.height || "10vh"
    const backgroundColor = props.backgroundColor

    return(
        <div className={"header-container header-unlimited-item" + floatClass + shadow} style={{height, backgroundColor}} >
            {props.children}
        </div>
    )

}

Header.propTypes = {
    isFloat: PropTypes.bool,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
    shadow: PropTypes.bool
}

export {HeaderItem , HeaderZone}
export default Header;