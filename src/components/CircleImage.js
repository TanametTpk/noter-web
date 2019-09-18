import React from 'react'
import PropTypes from 'prop-types'

const CircleImage = (props) => {
    return(
        <img src={props.src} alt={props.alt} style={props.style} className="circle-image" />
    )
}

CircleImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default CircleImage