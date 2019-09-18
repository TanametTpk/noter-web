import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const Bar = (props) => {

    // default size
    let size = props.size ? props.size : "100px"

    // create style
    let isHorizontal = props.direction === "top" || props.direction === "bottom"
    let barStyle = isHorizontal ? { height: size } : { width: size }

    // add custom class
    let direction = props.direction ? ("bar-" + props.direction) : ""

    return(
        <div className={"Bar " + direction } style={{...barStyle , ...props.customStyle}} >
            {props.children}
        </div>
    )
}

Bar.propTypes = {
    size: PropTypes.string,
    direction: PropTypes.string
}

export const Content = ( props ) => {

    // default size
    let size = props.size ? props.size : "100px"

    // default direction
    let direction = props.direction
    if (!direction) direction = "left"
    let marginDirection = "margin" + direction.charAt(0).toUpperCase() + direction.slice(1);

    // create style
    let barStyle = {}
    barStyle[marginDirection] = size

    return(
        <div className="SideBar-Content" style={{...barStyle , ...props.customStyle}} >
            {props.children}
        </div>
    )

}

Content.propTypes = {
    size: PropTypes.string,
    direction: PropTypes.string
}

export default class Sidebar extends Component {

    render() {

        if (this.props.customStyle) {
            var { container , bar , content } = this.props.customStyle
        }

        return (
            <div className="Sidebar-container" style={container} >

                <Bar direction={this.props.direction} size={this.props.size} customStyle={bar} >
                    {this.props.items}
                </Bar>

                <Content direction={this.props.direction} size={this.props.size} customStyle={content} >
                    {this.props.children}
                </Content>
                
            </div>
        )
    }

}

Sidebar.propTypes = {
    items: PropTypes.any,
    size: PropTypes.string,
    customStyle: PropTypes.object
}