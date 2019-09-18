import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const CollectionList = (props) => {

    return props.collections.map((collection) => {
        return (
            <Link to={"/note/" + collection.id} style={{color:"black" , textDecoration:"none"}} >
                <Card height="100px">
                    <div style={{width:"100%" , height:"100%" , padding:"24px" , overflow:"hidden" , display:"flex" , justifyContent:"left" , alignItems:"center"}}>
                        <p style={{fontSize:"24px"}}> {collection.name} </p>
                    </div>
                </Card>
            </Link>
        )
    })

}

CollectionList.propTypes = {
    collections: PropTypes.array.isRequired,
}

export default CollectionList