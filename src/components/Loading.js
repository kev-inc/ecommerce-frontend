import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loading() {
  return(
    <div className='d-flex justify-content-center p-4'>
      <Spinner animation="border"/>
    </div>
  )
}

export default Loading