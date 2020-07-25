import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { uploadImage, getImageFirebaseURL, addNewBanner } from '../../firebase/Firebase'

function handleImageAsFile(e) {
	const image = e.target.files[0]
	console.log(image)
}

function submitNewBanner(e) {
	e.preventDefault()
	const title = e.target.formBannerTitle.value
	const btnText = e.target.formBannerButtonText.value
	const btnLink = e.target.formBannerButtonLink.value
	const image = e.target.formImage.files[0]
	const uploadTask = uploadImage(image.name, image)
	uploadTask.on('state_changed', snapshot => {
		console.log(snapshot)
	}, err => {
		console.log(err)
	}, () => {
		getImageFirebaseURL(image.name)
			.then(firebaseURL => {
				addNewBanner(title, btnText, btnLink, firebaseURL)
					.then(() => alert('Successfully uploaded'))
					.catch(err => alert(err))
			})
	})
}

function SettingsPage() {
  return(
    <div>
      <h3>Settings</h3>
	  <h4>Banners</h4>
	  <Form onSubmit={(e) => submitNewBanner(e)}>
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
		  
		  <Form.File 
			id="formImage"
			label="Banner Background Image"
			custom
		  />
		 
		  <Button variant="primary" type="submit">
			Add
		  </Button>
		</Form>
      <h4>Categories</h4>
		  
	  <Form>
		  <Form.Group controlId="formCategoryTitle">
			<Form.Label>Title</Form.Label>
			<Form.Control type="text" placeholder="Enter title" />
		  </Form.Group>

		  <Form.Group controlId="formCategoryLink">
			<Form.Label>Link</Form.Label>
			<Form.Control type="text" placeholder="Enter link" />
		  </Form.Group>

		  <Button variant="primary" type="submit">
			Add
		  </Button>
		</Form>
    </div>
  )
}

export default SettingsPage