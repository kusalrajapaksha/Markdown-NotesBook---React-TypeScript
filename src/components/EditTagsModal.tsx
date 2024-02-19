import React from 'react'
import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap'
import { Tag } from '../customTypes/CustomTypes'

type EditTagsModalProps = {
    availableTags: Tag[]
    show: boolean
    handleClose: () => void
    onUpdate: (id: string, label:string) => void
    onDelete: (id:string) => void
}

function EditTagsModal({availableTags, show, handleClose, onDelete, onUpdate} : EditTagsModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Tags</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Stack gap={2}>
                    {availableTags.map(tag => (
                        <Row key={tag.id}>
                            <Col>
                                <Form.Control 
                                    type='text' 
                                    value={tag.label} 
                                    onChange={(e) => onUpdate(tag.id, e.target.value)}
                                />
                            </Col>
                            <Col xs='auto'>
                                <Button 
                                    onClick={() => onDelete(tag.id)}
                                    variant='outline-danger'
                                >
                                    &times;
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Stack>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default EditTagsModal