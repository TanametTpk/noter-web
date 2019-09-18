import React from 'react'

const CardColumn = (props) => {

    const { width , customStyle } = props

    return(
        <div className="card-column" style={{width , ...customStyle}}>
            {props.children}
        </div>
    )

}

const CardItem = (props) => {

    const { customStyle } = props

    return(
        <div className="card-item" style={{...customStyle}}>
            {props.children}
        </div>
    )
}

const Card = (props) => {

    const { height , customStyle } = props

    return(
        <div className="card-container" style={{height , ...customStyle}}>
            {props.children}
        </div>
    )
}

export { CardItem , CardColumn }
export default Card