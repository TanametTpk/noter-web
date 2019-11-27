import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types';
import { ReactTinyLink } from 'react-tiny-link'
import StartButton from './StarButton'
import PinButton from './PinButton'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg'

const NoteList = (props) => {

    const validUrl = (str) => {
        
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return !!pattern.test(str);
    }

    return props.notes.map((note , index) => {

        if (validUrl(note.content)){
            if (!note.content.includes("http")){
                note.content = "http://" + note.content
            }
        }

        return (
            <div key={index}>
                {
                    validUrl(note.content) ? 
                    <div style={{marginTop:"24px" , position:"relative"}}>
                        <div style={{ position:"absolute" , right:"20px" , top:"12px" , zIndex:"100" ,display:"flex"}}>
                            <PinButton isPress={note.pin} onClick={()=>{ props.update({...note , pin:!note.pin}) }} />
                            <StartButton isPress={note.star} onClick={()=>{ props.update({...note , star:!note.star}) }} />
                            <DeleteIcon onClick={() => {props.deleteNote(note)}} style={{width:"28px", height:"28px", cursor:"pointer"}} />
                        </div>
                        <ReactTinyLink
                            cardSize="small"
                            showGraphic={true}
                            width={100}
                            maxLine={2}
                            minLine={1}
                            url={note.content}
                        />
                    </div>
                    : 
                    <Card customStyle={{marginTop:"24px" , padding:"24px" , position:"relative"}}>
                        <div style={{position:"absolute" , top:"12px" , right:"20px", display:"flex"}}>
                            <PinButton isPress={note.pin} onClick={()=>{ props.update({...note , pin:!note.pin}) }} />
                            <StartButton isPress={note.star} onClick={()=>{ props.update({...note , star:!note.star}) }} />
                            <DeleteIcon onClick={() => {props.deleteNote(note)}} style={{width:"28px", height:"28px", cursor:"pointer"}} />
                        </div>
                        <p style={{paddingRight:"20%"}}>
                            {note.content}
                        </p>
                    </Card>
                }
            </div>
        )
    })

}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
}

export default NoteList