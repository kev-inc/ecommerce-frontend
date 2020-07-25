import React, { useState, useEffect } from 'react'
import { Button, Form, Image, Table, Accordion, Card } from 'react-bootstrap'
import { getImageFirebaseURL, addNewCategory, uploadImage, getCategories } from '../../firebase/Firebase'

function submitNewCategory(e, setIsUploading) {
  e.preventDefault()
  const title = e.target.formCategoryTitle.value
  const link = e.target.formCategoryLink.value
  const image = e.target.formCategoryImage.files[0]
  setIsUploading(true)
  const uploadTask = uploadImage(image.name, image)
  uploadTask.on('state_changed', snapshot => {
    console.log(snapshot)
  }, err => {
    console.log(err)
  }, () => {
    getImageFirebaseURL(image.name)
      .then(firebaseURL => {
        addNewCategory(title, link, firebaseURL)
          .then(() => {
            alert('Successfully uploaded')
            setIsUploading(false)
          })
          .catch(err => alert(err))
      })
  })
}

function SettingsCategory() {
  const [categories, setCategories] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  useEffect(() => {
    getCategories().then(res => setCategories(res))
    return 
  }, [categories])
  return (
    <div id="SettingsCategory" className='py-4'>
      <h4>Categories</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr>
              <td>{index + 1}</td>
              <td><Image src={category[1].imgUrl} thumbnail width='120px' /></td>
              <td>{category[1].title}</td>
              <td>{category[1].link}</td>
              <td>
                <Button variant='link' disabled={index === 0}><i class="fas fa-arrow-up"></i></Button>
                <Button variant='link' disabled={index === categories.length - 1}><i class="fas fa-arrow-down"></i></Button>
                <Button variant='link'><i class="fas fa-pen"></i></Button>
                <Button className='text-danger' variant='link'><i class="fas fa-trash"></i></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Add new
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <Form onSubmit={e => submitNewCategory(e, setIsUploading)}>
                <Form.Group controlId="formCategoryTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="formCategoryLink">
                  <Form.Label>Link</Form.Label>
                  <Form.Control type="text" placeholder="Enter link" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Background Image</Form.Label>
                  <Form.File
                    id="formCategoryImage"
                    label="Upload category background image"
                    custom
                  />
                </Form.Group>

                <Form.Group>
                  <Button variant="primary" type="submit" disabled={isUploading}>{isUploading ? 'Uploading...' : 'Add'}</Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}
export default SettingsCategory