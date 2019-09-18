import React from 'react'
import Card from '../components/Card'
import Header , {HeaderItem , HeaderZone} from '../components/header'
import {Link} from 'react-router-dom'
import CollectionList from '../components/CollectionList'

const CollectionPage = (props) => {

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
                        <Link to="/" onClick={logout} style={{textDecoration:"none" , color:"white"}}>logout</Link>
                    </HeaderItem>
                </HeaderZone>

            </Header>

            <div style={{ padding:"8% 10% 0px" , minHeight:"100vh" , backgroundColor:"#f6f8f9"}}>
                <h1>Collections</h1>
                <div style={{display:"grid" , gridGap:"28px"  , gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>

                    <div className="empty-card">
                        <h3>Create new Collection</h3>
                    </div>

                    <CollectionList collections={[{id:3 , name:"hello word"} , {id:1 , name:"gg"}]} />

                </div>
            </div>
        </div>
    )
}

export default CollectionPage;