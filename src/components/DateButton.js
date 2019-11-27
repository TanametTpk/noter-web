import React from 'react'
import { ReactComponent as NonPush } from '../assets/icons/Datefilter.svg'

const DateButton = ({isPress, ...props}) => {
    return (
        <div {...props} style={{width: "28px" , height:"28px", cursor:"pointer"}}>
            {
                isPress ?
                <NonPush fill="green" />
                :
                <NonPush />
            }
        </div>
    )
}

export default DateButton
