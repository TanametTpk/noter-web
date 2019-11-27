import React , {useState , useEffect} from 'react'
import Header , {HeaderItem , HeaderZone} from '../components/header'
import {Link} from 'react-router-dom'
import Card from '../components/Card'
import NoteList from '../components/NoteList'
import { connect } from 'react-redux'
import { createNote , getNotes , updateNote, deleteNote } from '../store/actions/noteAction'
import { logoutUser } from '../store/actions/userAction'
import { deleteCollection } from '../store/actions/collectionAction'
import StarButton from '../components/StarButton'
import DateButton from '../components/DateButton'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg'
import * as _ from 'lodash'

const NotePage = (props) => {

    useEffect(() => {
        props.getNotes(props.user.id , props.match.params.id)
    } , [])

    let [ note , setNote ] = useState("")
    let [ isSort , setSort ] = useState(false)
    let [ isSortByDate , setSortByDate ] = useState(false)
    let notes = props.notes.filter((note) => {
        if(isSort){
            return note.star
        }
        return true
    })

    let pins = notes.filter((note) => note.pin)
    notes = [ ...pins , ...notes.filter((note) => !note.pin)]

    if (isSortByDate){
        notes = _.sortBy(notes, ["created_at"])
    }

    const logout = () => {
        props.logoutUser()
        props.history.push("/");
    }

    const sortStar = () => {
        setSort(!isSort)
    }

    const sortDate = () => {
        setSortByDate(!isSortByDate)
    }

    const takeNote = async () => {
        await props.createNote(props.user.id , props.match.params.id , note)
        setNote("")
    }

    const updateNote = (note) => {
        props.updateNote(props.user.id , props.match.params.id , note)
    }

    const deleteCollection = () => {
        props.deleteCollection(props.match.params.id)
        props.history.goBack()
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
                        <Link to="/collection" style={{textDecoration:"none" , color:"white" , paddingRight:"30px"}}>collections</Link>
                    </HeaderItem>
                    <HeaderItem justifyContent={"start"} >
                        <Link to="/" onClick={logout} style={{textDecoration:"none" , color:"white"}}>logout</Link>
                    </HeaderItem>
                </HeaderZone>

            </Header>
            <div style={{ padding:"8% 10% 0px" , minHeight:"100vh" , backgroundColor:"#f6f8f9"}}>
                <h1>Notes</h1>
                <p style={{display: "flex" , justifyContent:"space-between"}} >
                    <div style={{display: "flex"}}>
                        <div>sort by </div>
                        <StarButton onClick={sortStar} isPress={isSort} />
                        <DateButton onClick={sortDate} isPress={isSortByDate} />
                    </div>
                    <div><DeleteIcon onClick={deleteCollection} style={{width:"28px", height:"28px", cursor:"pointer"}} /></div>
                </p>
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

                    <div style={{margin:"24px 0"}}>
                        <NoteList deleteNote={(note) => props.deleteNote(props.user.id , props.match.params.id, note)} notes={notes} update={updateNote} />
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
    createNote , getNotes , logoutUser , updateNote, deleteNote, deleteCollection
}


export default connect(mapStateToProps , mapDispatchToProps)(NotePage);