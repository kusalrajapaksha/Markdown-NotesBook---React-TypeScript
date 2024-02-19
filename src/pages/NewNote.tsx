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
        <h1 className='mb-4'>New Note</h1>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </>
  )
}

export default NewNote
