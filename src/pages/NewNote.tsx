import { Row, Col } from 'react-bootstrap'
import NoteForm from '../components/NoteForm'
import { NoteData, Tag } from '../customTypes/CustomTypes'

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

function NewNote({onSubmit, onAddTag, availableTags} : NewNoteProps) {
  return (
    <>
      <Row className='align-items-center mb-4' style={{backgroundColor: "#383E40", borderRadius: 10, boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)", color: "#bdd4e7"}}>
        <Col style={{marginTop: 15}}>
          <h1>New Note</h1>
        </Col> 
      </Row>
        
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  )
}

export default NewNote
