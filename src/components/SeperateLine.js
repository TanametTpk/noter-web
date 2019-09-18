import React from 'react'
import PropTypes from 'prop-types';

export const SeperateLine = (props) => {
    return(
        <div className="Seperate-line" />
    )
}

SeperateLine.propTypes = {
    width: PropTypes.string
}

export const TitleSeperateLine = (props) => {
    return(
        <div className="TitleSeperateLine" >
            <SeperateLine /> <div style={{textAlign:"center"}}> {props.title} </div> <SeperateLine />
        </div>
    )
}

TitleSeperateLine.propTypes = {
    title: PropTypes.string.isRequired
}