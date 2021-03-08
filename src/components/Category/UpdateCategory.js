import React, { Component, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function UpdateCategory(props) {
  const { object, _updateCategory } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(object.name);

  const updateStock = async () => {
    URL = "/api/V1/category";
    const category = {
      id: object.id,
      name: name,
    };
    const setting = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    };
    try {
      const response = await fetch(URL, setting);
      if (response.status === 200) {
        _updateCategory(category);
        handleClose();
      }
    } catch {}
    handleClose();
  };
  const edit = <FontAwesomeIcon icon={faEdit} onClick={handleShow} />;

  return (
    <>
      {edit}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
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
          <Button variant="primary" onClick={updateStock}>
            Update Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
