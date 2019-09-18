import React , {useState} from 'react'
import TitleInput from '../components/Input'
import {Button} from '../components/Button'
import Header , {HeaderItem , HeaderZone} from '../components/header'
import {Link} from 'react-router-dom'
import CollectionList from '../components/CollectionList'
import Modal from 'react-modal'

const EmptyCard = (props) => {

    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
        }
      };

    let [isOpen , setOpen] = useState(false)
    let [name , setName] = useState("")

    const create = () => {
        if (props.action) props.action(name)
        setOpen(false)
        setName("")
    }

    return(
        <div>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setOpen(false)}
                contentLabel="Create Collection"
                style={customStyles}
            >
                <div style={{display:"grid" , gridGap:"12px"  , gridTemplateRows:"2fr 2fr 1fr"}}>
                    <h1>Create Collection</h1>
                    <TitleInput value={name} placeholder="Collection name" onChange={({target:{value}}) => setName(value) } />
                    <Button primary text="Create" action={() => create()}/>
                </div>
            </Modal>

            <div className="empty-card" style={{width:"100%" , height:"100%"}} onClick={() => { setOpen(true) }}>
                <h3>Create new Collection</h3>
            </div>

        </div>
    )

}

const CollectionPage = (props) => {

    const logout = () => {
        console.log("hello");
        
    }

    const createCollection = (name) => {

        console.log(name);

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

                    <EmptyCard action={createCollection} />

                    <CollectionList collections={[{id:3 , name:"hello word"} , {id:1 , name:"gg"}]} />

                </div>
            </div>
        </div>
    )
}

export default CollectionPage;