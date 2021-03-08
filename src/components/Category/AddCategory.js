import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function UpdateStock() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');



  const addCategory = async() => {
    URL = '/api/V1/category'
    const category = {
      'name': name,
    }
    const setting = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
  };
    try{
    const response = await fetch(URL, setting)
    if (response.status === 200 ){
      handleClose()
    }
    }catch{}
    handleClose()
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Save Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


