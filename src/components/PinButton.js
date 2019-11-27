import React from 'react'
import { ReactComponent as Push } from '../assets/icons/PinP.svg'
import { ReactComponent as NonPush } from '../assets/icons/Pin.svg'

const PinButton = ({isPress, ...props}) => {
    return (
        <div {...props} style={{width: "28px" , height:"28px", cursor:"pointer"}}>
            {
                isPress ?
                <Push style={{width: "28px" , height:"28px"}} />
                :
                <NonPush />
            }
        </div>
    )
}

export default PinButton
