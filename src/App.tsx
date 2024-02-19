import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid'

import NewNote from './pages/NewNote';
import NoteList from './pages/NoteList';
import { NoteData, RawNote, Tag } from './customTypes/CustomTypes';
import { useLocalStorage } from './hooks/useLocalStorage';
import NoteLayout from './components/NoteLayout';
import NoteView from './pages/NoteView';
import EditNote from './pages/EditNote';


function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  // Global tags list
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []) 

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {
        ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))
      }
    })
  },[notes, tags])

  //Create New Note functions
  function onCreateNote({tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidV4(), tagIds: tags.map(tag => tag.id)}]
    })
  }

  //Tags functions
  function addTag(tag: Tag){
    setTags(prev => [...prev, tag])
  }

  function updateTag(id: string, label:string){
    setTags(prevTags => {
      return prevTags.map(tag => {
        if(tag.id === id){
          return {...tag, label}
        }else{
          return tag
        }
      })
    })
  }

  function deleteTag(id: string){
    setTags(tags => {
      return tags.filter(tag => (tag.id !== id))
    })
  }

  //Edit Note functions
  function onUpdateNote(id: string, {tags, ...data}: NoteData){
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if(note.id === id){
          return {...note, ...data, tagIds: tags.map(tag => tag.id)}
        }else{
          return note
        }
      })
    })
  }

  function onDeleteNote(id:string){
    setNotes(prevNotes => {
      return prevNotes.filter(note => (note.id !== id))
    })
  }

  return (
    <Container className='my-4'>
      <Routes>
          <Route path='/' element={<NoteList availableTags={tags} notes={notesWithTags} onUpdateTag={updateTag} onDeleteTag={deleteTag}/>} />
          <Route path='/new' element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>} />
          <Route path='/:id' element={<NoteLayout notes={notesWithTags} />}>
            <Route index element={<NoteView onDeleteNote={onDeleteNote}/>}/>
            <Route path='edit' element={<EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags}/>}/>
          </Route>
          <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </Container>
    
  )
}

export default App
