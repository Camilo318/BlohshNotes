import React, {useEffect, useState} from 'react'
import Note from './Note'
import { useAppState } from './AppContext'

const NoteContainer = () => {
    const [state, dispatch] = useAppState()
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/api/v1/notes')
            .then(res => res.json()).then(data => {
                setNotes(data.info)
                dispatch({
                    type: 'set-amount',
                    payload: data.info.length
                })
            })
            .catch(console.log)
        }, 250)

    }, [])

    return (
        <div className='grid-container'>
            {notes.map(note => {
                return(
                    <Note {...note} key={note._id}/>
                )
            })}
        </div>
    )
}

export default NoteContainer
