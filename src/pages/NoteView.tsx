import { useNote } from '../components/NoteLayout'
import { Col, Row, Stack, Badge, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

type NoteViewProps = {
    onDeleteNote: (id: string) => void
}


function NoteView({onDeleteNote}: NoteViewProps) {
    const note = useNote()
    const navigate = useNavigate()

  return (
    <>
        <Row className='align-items-center mb-4' 
        style={{backgroundColor: "#383E40", borderRadius: 10, boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.2)", color: "#bdd4e7"}}>
            <Col style={{marginTop: 15}}>
                <h1>{note.title}</h1>
            </Col>

            <Col xs='auto'>
                <Stack gap={2} direction='horizontal'>
                    <Link to={`/${note.id}/edit`}>
                        <Button variant='primary'>Edit</Button>
                    </Link>
                    <Button 
                        variant='outline-danger'
                        onClick={() => {
                            onDeleteNote(note.id)
                            navigate('/')
                        }}
                    >
                        Delete
                    </Button>
                    <Link to='..'>
                        <Button variant='outline-secondary'>Back</Button>
                    </Link>
                    
                </Stack>
             </Col>
        </Row>

        <Row className='align-items-center mb-4'>
            <Stack>
                {note.tags.length > 0 && (
                    <Stack gap={1} direction='horizontal' className='flex-wrap'>
                        {note.tags.map(tag => (
                            <Badge className='text-truncate' key={tag.id}>{tag.label}</Badge>
                        ))}
                    </Stack>
                )}     
            </Stack>
        </Row>
            
        <div style={{background: "white", height: "full", padding: 10, borderRadius: 5 , display: "flex", flexDirection: "column", flex: 1}}>
            <ReactMarkdown>
                {note.markdown}
            </ReactMarkdown>    
        </div>
        
        
    </>
  )
}

export default NoteView