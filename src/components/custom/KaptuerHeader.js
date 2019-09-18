import React from 'react'
import Header , {HeaderItem , HeaderZone} from '../header'
import CircleImage from '../CircleImage'
import { Button } from '../Button'

const CustomButton = (props) =>{

    let buttonClass = props.primary ? "button primary" : "button"
    // concat string to avoid warning
    let link = props.href ? props.href : "javascript".concat(":void(0);")

    return(
        <HeaderItem style={{ padding:'10px' }}>
            <Button className={buttonClass} action={()=>{props.action(props.id)}} href={link} text={props.text} primary={props.primary} />
        </HeaderItem>
    )
}

const DropdownButton = (props) => {
    return(
        <HeaderItem style={{ padding:'10px' }} >
            <div className="dropdown">
                <div className="dropbtn" onClick={()=>{props.action(props.id)}} >{props.text}</div>
                <div className="dropdown-content">
                    { props.contents.map(content => <a href={content.href} key={content.key} onClick={()=>{props.action(content.key)}} >{content.text}</a> ) }
                </div>
            </div>
        </HeaderItem>
    )
}

const ButtonList = (props) => {

    const noFunction = (variable) => {}

    if (!props.action) props.action = noFunction 

    return(
        props.buttons.map((button) => {
            
            if(button.contents && button.contents.length > 0){
                return <DropdownButton key={button.key} id={button.key} action={props.action} text={button.text} contents={button.contents} />
            }else{
                return <CustomButton key={button.key} id={button.key} action={props.action} href={button.href} text={button.text} primary={button.primary} /> 
            }

        })
    )
}

const KaptuerHeader = (props) => {
    return(
        <Header height="80px" backgroundColor="white" isFloat={true} shadow={props.shadow} >

            <HeaderZone paddingLeft="50px">
                <HeaderItem justifyContent={"start"} >
                    <CircleImage src={props.logo} alt={"logo"}/>
                </HeaderItem>
            </HeaderZone>

            <HeaderZone position={'right'} size={4} paddingRight="50px">
                <ButtonList action={props.action} buttons={props.buttons} />
            </HeaderZone>

        </Header>
    )
}

export const DevHeader = (props) => {
    return(
        <Header height="80px" backgroundColor="white" isFloat={props.isFloat} shadow={props.shadow} >

            <HeaderZone paddingLeft="50px">
                <HeaderItem justifyContent={"start"} >
                    <CircleImage src={props.logo} alt={"logo"}/>
                </HeaderItem>
            </HeaderZone>

            <HeaderZone position={'right'} size={4} paddingRight="50px">
                <ButtonList action={props.action} buttons={props.buttons} />
            </HeaderZone>

        </Header>
    )
}

export default KaptuerHeader