import React , {useState , useEffect} from 'react'
import Header , {HeaderItem , HeaderZone} from '../components/header'
import {Link} from 'react-router-dom'
import Card from '../components/Card'
import NoteList from '../components/NoteList'
import { connect } from 'react-redux'
import { createNote , getNotes } from '../store/actions/noteAction'

const NotePage = (props) => {

    useEffect(() => {
        props.getNotes(props.user.id , props.match.params.id)
    } , [])

    let [ note , setNote ] = useState("")
    let [ isSort , setSort ] = useState(false)

    const logout = () => {
        console.log("hello");
        
    }

    const sortStar = () => {
        setSort(!isSort)
    }

    const takeNote = async () => {
        console.log(note);
        
        await props.createNote(props.user.id , props.match.params.id , note)
        setNote("")
    }

    const updateNote = (id , note) => {

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
                        <NoteList notes={props.notes} />
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user:state.user.item,
    notes:state.note.items
})

const mapDispatchToProps = {
    createNote , getNotes
}


export default connect(mapStateToProps , mapDispatchToProps)(NotePage);