import React , {useState} from 'react'
import Header , {HeaderItem , HeaderZone} from '../components/header'
import {Link} from 'react-router-dom'
import Card from '../components/Card'
import NoteList from '../components/NoteList'

const NotePage = (props) => {

    let [ note , setNote ] = useState("")

    const logout = () => {
        console.log("hello");
        
    }

    const sortStar = () => {
        console.log("star");
        
    }

    const takeNote = () => {
        console.log(note);
        setNote("")
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
                <p>sort by <button onClick={sortStar}>star</button> </p>
                <div style={{display:"flex" , flexDirection:"column" }}>

                    <Card customStyle={{ width:"100%" , minHeight:"180px" , padding:"0px 24px 12px" }}>
                        <p style={{fontSize:"24px"}}>Take a Note</p>
                        <textarea placeholder="write your note here..." value={note} onChange={({target:{value}})=>setNote(value)} />
                        <div style={{ height:'45px' , display:"flex" , justifyContent:"flex-end" , marginTop:"12px" }} >
                            <div className="note-button" onClick={takeNote}>
                                Note
                            </div>
                        </div>
                    </Card>

                    <div style={{marginTop:"24px"}}>
                        <NoteList notes={[{content:"https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url"} , {content:"kuy kuy kuy"}]} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotePage;