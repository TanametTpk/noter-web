import React from 'react'
import Header , {HeaderItem , HeaderZone} from '../components/header'
import {Link} from 'react-router-dom'
import Card from '../components/Card'

const NotePage = (props) => {

    const logout = () => {
        console.log("hello");
        
    }

    return (
        <div>
            <Header height="80px" backgroundColor="#151b26" isFloat={true} shadow={true} >

                <HeaderZone paddingLeft="50px">
                    <HeaderItem justifyContent={"start"} >
                        <h1>Noter</h1>
                    </HeaderItem>
                </HeaderZone>

                <HeaderZone position={'right'} size={4} paddingRight="50px">
                    <HeaderItem justifyContent={"start"} >
                        <Link to="/collection" onClick={logout} style={{textDecoration:"none" , color:"white" , paddingRight:"30px"}}>collections</Link>
                    </HeaderItem>
                    <HeaderItem justifyContent={"start"} >
                        <Link to="/" onClick={logout} style={{textDecoration:"none" , color:"white"}}>logout</Link>
                    </HeaderItem>
                </HeaderZone>

            </Header>

            <div style={{ padding:"8% 10% 0px" , minHeight:"100vh" , backgroundColor:"#f6f8f9"}}>
                <h1>Notes</h1>
                <div style={{display:"flex" }}>

                    <Card customStyle={{ width:"100%" , minHeight:"180px" , padding:"0px 24px 12px" }}>
                        <p style={{fontSize:"24px"}}>Title</p>
                        <textarea placeholder="Take a note..." />
                        <div style={{ height:'80px' , display:"flex" , justifyContent:"flex-end" , marginTop:"12px" }} >
                            <div className="note-button">
                                Note
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}

export default NotePage;