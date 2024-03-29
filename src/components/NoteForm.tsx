import { FormEvent, useRef, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable'
import { Link, useNavigate } from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'

import { NoteData, Tag } from '../customTypes/CustomTypes'


type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

function NoteForm({onSubmit, onAddTag, availableTags, title = "", markdown = "", tags = []} : NoteFormProps) {

    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        onSubmit({
            title: titleRef.current?.value ?? "",
            markdown: markdownRef.current?.value ?? "",
            tags: selectedTags
        })

        navigate('..')
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId='title'>
                        <Form.Label style={{color:"#bdd4e7"}}>Title</Form.Label>
                        <Form.Control required ref={titleRef} defaultValue={title}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='tags'>
                        <Form.Label style={{color:"#bdd4e7"}}>Tags</Form.Label>
                        <CreatableReactSelect 
                            isMulti 
                            value={selectedTags.map(tag => {
                                return {
                                    label: tag.label, 
                                    value: tag.id 
                                }
                            })}
                            onCreateOption={label => {
                                const newTag = {id: uuidV4(), label}
                                onAddTag(newTag)
                                setSelectedTags(prev => [...prev, newTag])
                            }}

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
            <Form.Group controlId='markdown'>
                <Form.Label style={{color:"#bdd4e7"}}>Body</Form.Label>
                <Form.Control defaultValue={markdown} required as='textarea' rows={15} ref={markdownRef}/>
            </Form.Group>
            <Stack direction='horizontal' gap={2} className='justify-content-end'>
                <Button type='submit' variant='primary'>Save</Button>
                <Link to='..'>
                    <Button type='button' variant='outline-secondary'>Cancel</Button>
                </Link> 
            </Stack>
        </Stack>
    </Form>
  )
}

export default NoteForm