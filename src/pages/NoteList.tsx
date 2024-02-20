import { useMemo, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Note, Tag } from '../customTypes/CustomTypes'
import NoteCard from '../components/NoteCard'
import EditTagsModal from '../components/EditTagsModal'

import editNote from '../assets/edit.png'

type NoteListProps = {
    availableTags: Tag[]
    notes: Note[]
    onUpdateTag: (id:string, label: string) => void
    onDeleteTag: (id:string) => void
}

function NoteList({availableTags, notes, onDeleteTag, onUpdateTag} : NoteListProps) {

    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("")
    const [editTagsModalOpen, setEditTagsModalOpen] = useState(false)

    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) && 
            (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)))
        })
    },[title, selectedTags, notes])
    
  return (
    <>
    <Row className='align-items-center mb-4' style={{backgroundColor: "#383E40", borderRadius: 10, boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)", color: "#bdd4e7"}}>
        <Col style={{marginTop: 15}}>
    
            <Stack direction='horizontal' className='align-items-center'>
                <h1>Markdown NoteBook</h1>
                <img src={editNote} alt="Icon" style={{ marginBottom: 15, marginLeft: '20px', width: 40, filter: "invert(100%)" }} />
            </Stack> 
            
        </Col>
        <Col xs='auto'>
            <Stack gap={2} direction='horizontal'>
                <Link to={'/new'}>
                    <Button variant='primary'>Create</Button>
                </Link>
                <Button 
                    variant='outline-secondary'
                    onClick={() => setEditTagsModalOpen(true)}
                >
                    Edit Tags
                </Button>
            </Stack>
        </Col>
    </Row>

    <Form>
        <Row className='mb-4'>
            <Col>
                <Form.Group controlId='title'>
                    <Form.Label style={{color:"#bdd4e7"}}>Title</Form.Label>
                    <Form.Control 
                        type='text'
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId='tags'>
                        <Form.Label style={{color:"#bdd4e7"}}>Tags</Form.Label>
                        <ReactSelect 
                            isMulti 

                            value={selectedTags.map(tag => {
                                return {
                                    label: tag.label, 
                                    value: tag.id 
                                }
                            })}
                            
                            options={availableTags.map(tag => {
                                return {label: tag.label, value: tag.id}
                            })}
                            onChange={(tags) => {
                                setSelectedTags(
                                    tags.map(tag => {
                                        return {id: tag.value, label: tag.label}
                                    })
                                )
                            }}
                        />
                    </Form.Group>
            </Col>

        </Row>
    </Form>

    <Row xs={1} sm={2} lg={3} xl={4} className='g-3'>
        {filteredNotes.map(note => (
            <Col key={note.id}>
                <NoteCard id={note.id} title={note.title} tags={note.tags}/>
            </Col>
        ))}
    </Row>

    {/* Edit tags modal */}
    <EditTagsModal 
        show={editTagsModalOpen} 
        handleClose={() => setEditTagsModalOpen(false)} 
        availableTags={availableTags}
        onUpdate={onUpdateTag}
        onDelete={onDeleteTag}
    />

    </>

  )
}


export default NoteList