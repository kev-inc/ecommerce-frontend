import React, { useState, useEffect } from 'react'
import { Button, Form, Image, Table, Accordion, Card } from 'react-bootstrap'
import { uploadImage, getImageFirebaseURL, addNewBanner, getBanners } from '../../firebase/Firebase'

function submitNewBanner(e, setIsUploading) {
  e.preventDefault()
  const title = e.target.formBannerTitle.value
  const btnText = e.target.formBannerButtonText.value
  const btnLink = e.target.formBannerButtonLink.value
  const image = e.target.formImage.files[0]
  setIsUploading(true)
  const uploadTask = uploadImage(image.name, image)
  uploadTask.on('state_changed', snapshot => {
    console.log(snapshot)
  }, err => {
    console.log(err)
  }, () => {
    getImageFirebaseURL(image.name)
      .then(firebaseURL => {
        addNewBanner(title, btnText, btnLink, firebaseURL)
          .then(() => {
            alert('Successfully uploaded')
            setIsUploading(false)
          })
          .catch(err => alert(err))
      })
  })
}

function SettingsBanner() {
  const [banners, setbanners] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  useEffect(() => {
    getBanners().then(res => {
      setbanners(res)
    })
    return
  }, [banners])
  return (
    <div id="SettingsBanner" className='py-4'>
      <h4>Banners</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Button Text</th>
            <th>Button Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {banners.map((banner, index) => (
            <tr>
              <td>{index + 1}</td>
              <td><Image src={banner[1].imgUrl} thumbnail width='120px' /></td>
              <td>{banner[1].title}</td>
              <td>{banner[1].btnText}</td>
              <td>{banner[1].btnLink}</td>
              <td>
                <Button variant='link' disabled={index === 0}><i class="fas fa-arrow-up"></i></Button>
                <Button variant='link' disabled={index === banners.length - 1}><i class="fas fa-arrow-down"></i></Button>
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
              <Form onSubmit={(e) => submitNewBanner(e, setIsUploading)}>
                <Form.Group controlId="formBannerTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="formBannerButtonText">
                  <Form.Label>Button Text</Form.Label>
                  <Form.Control type="text" placeholder="Enter button text" />
                </Form.Group>

                <Form.Group controlId="formBannerButtonLink">
                  <Form.Label>Button Link</Form.Label>
                  <Form.Control type="text" placeholder="Enter button link" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Background Image</Form.Label>
                  <Form.File
                    id="formImage"
                    label="Upload banner background image"
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
export default SettingsBanner