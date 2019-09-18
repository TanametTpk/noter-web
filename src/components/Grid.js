import React from 'react'
import PropTypes from 'prop-types';

const GridCol = (props) => {

    let template = props.children.reduce((result , value)=> result + " 1fr" , "")
    
    return(
        <div className="Grid-container" style={{gridTemplateColumns:template , gridGap:props.gap , ...props.customStyle}} >
            {props.children}
        </div>
    )

}

GridCol.propTypes = {
    gap: PropTypes.string,
    customStyle: PropTypes.object
}


export default GridCol