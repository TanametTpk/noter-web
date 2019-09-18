import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {

    return(
        <div className="input-wrapper" style={props.customStyle}>
            <div className="Input" >
                <input type="email" id="input" className="Input-text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
            </div>
        </div>
    )

}

Input.propTypes = {
    customStyle: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value:PropTypes.string
}

export const TitleInput = (props) => {

    let input_type = props.secure ? "password" : "text"

    return(
        <div className="TitleInput-container">
            <label>{props.title}</label>
            <input type={input_type} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}

TitleInput.propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value:PropTypes.string
}

export default Input