import React, { Component, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import {  useSelector } from 'react-redux';
import { selectCategoryList } from '../../features/categorySlice';



function UpdateStock(props) {

  const { object, _updateStock } = props;
  const categoryList = useSelector(selectCategoryList);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setCategories(categoryList);
    setShow(true)
  };

  const [name, setName] = useState(object.name);
  const [weight, setWeight] = useState(object.weight);
  const [wastage, setWastage] = useState(object.wastage);
  const [makingCharge, setMakingCharge] = useState(object.making_charge);
  const [category_id, setCategory] = useState(object.category_id);
  const [categories, setCategories] = useState([]);


  const categoryItem = categories.map((item) =>{
    return <option key={item.id} value={item.id} data-key={item.id} >{`${item.name} - ${item.material}`}</option>;
  }
  );


  const updateStock = async () => {
    URL = '/api/V1/ornament'
    const ornament = {
      id: object.id,
      name: name,
      weight: weight,
      wastage: wastage,
      making_charge: makingCharge,
      category_id: category_id,
    }
    const setting = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ornament),
    };
    try {
      const response = await fetch(URL, setting)
      if (response.status === 200) {
        _updateStock(ornament)
        handleClose()
      }
    } catch { }
    handleClose()
  }
  const edit = <FontAwesomeIcon
    icon={faEdit}
    onClick={handleShow} />;


  return (
    <>
      {edit}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Ornament Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasciWeight">
              <Form.Label>Ornament weight</Form.Label>
              <Form.Control
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ornament wastage</Form.Label>
              <Form.Control
                type="text"
                value={wastage}
                onChange={(e) => setWastage(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Ornament Making charge</Form.Label>
              <Form.Control
                type="text"
                value={makingCharge}
                onChange={(e) => setMakingCharge(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Categories</Form.Label>
              <Form.Control as="select" value={category_id} onChange={(e) => setCategory(e.target.value)}>
                {categoryItem}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateStock}>
            Update Stock
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateStock;

