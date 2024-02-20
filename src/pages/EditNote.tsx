import { Col, Row } from 'react-bootstrap'
import NoteForm from '../components/NoteForm'
import { useNote } from '../components/NoteLayout'
import { NoteData, Tag } from '../customTypes/CustomTypes'

type EditNoteProps = {
    onSubmit: (id:string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

function EditNote({onSubmit, onAddTag, availableTags} : EditNoteProps) {

  const note = useNote()

  return (
    <>
      <Row className='align-items-center mb-4'  style={{backgroundColor: "#383E40", borderRadius: 10, boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)", color: "#bdd4e7"}}>
        <Col style={{marginTop: 15}}>
          <h1>Edit Note</h1>
        </Col>
      </Row>
        
        <NoteForm 
          title = {note.title}
          markdown = {note.markdown}
          tags = {note.tags}
          onSubmit={data => 
          onSubmit(note.id, data)} 
          onAddTag={onAddTag} 
          availableTags={availableTags}
          />
    </>
  )
}

export default EditNote
