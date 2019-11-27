import React from 'react'
import { ReactComponent as StarPush } from '../assets/icons/StarP.svg'
import { ReactComponent as Star } from '../assets/icons/Star.svg'

const StarButton = ({isPress, ...props}) => {
    return (
        <div {...props} style={{width: "28px" , height:"28px", cursor:"pointer" , margin:"0 12px 0 12px"}}>
            {
                isPress ?
                <StarPush />
                :
                <Star />
            }
        </div>
    )
}

export default StarButton
