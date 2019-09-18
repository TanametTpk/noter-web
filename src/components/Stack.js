import React from 'react'
import PropTypes from 'prop-types';

const VStack = (props) => {

    const {maxWidth , minWidth , customStyle} = props
    
    return(
        <div className="VStack-container" style={{maxWidth , minWidth , ...customStyle}}>
            {props.children}
        </div>
    )
}

VStack.propTypes = {
    maxWidth: PropTypes.string,
    minWidth: PropTypes.string,
    customStyle: PropTypes.object
}

export const HStack = (props) => {

    const {maxHeight , minHeight , customStyle} = props

    return(
        <div className="HStack-container" style={{maxHeight , minHeight , ...customStyle}}>
            {props.children}
        </div>
    )
}

HStack.propTypes = {
    maxHeight: PropTypes.string,
    minHeight: PropTypes.string,
    customStyle: PropTypes.object
}

export default VStack

export const StackItem = (props) => {

    const {flex} = props
    
    return(
        <div className="Stack-item" style={{flex , ...props.customStyle}}>
            {props.children}
        </div>
    )

}

StackItem.propTypes = {
    flex: PropTypes.string,
    customStyle: PropTypes.object
}