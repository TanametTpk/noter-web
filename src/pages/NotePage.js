import React from 'react'

const NotePage = (props) => {
    return (
        <div>
            note page with id = {props.match.params.id}
        </div>
    )
}

export default NotePage;