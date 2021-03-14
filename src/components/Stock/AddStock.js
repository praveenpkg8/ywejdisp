import React, { Component, useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import {  useSelector } from 'react-redux';
import { selectCategoryList } from '../../features/categorySlice';

export default function AddStock() {
  const [show, setShow] = useState(false);
  const categoryList = useSelector(selectCategoryList);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [wastage, setWastage] = useState('');
  const [makingCharge, setMakingCharge] = useState('');
  const [categories, setCategories] = useState([]);
  const [category_id, setCategory] = useState('');




  const categoryItem = categories.map((item) =>
    <option key={item.id} value={item.id} data-key={item.id} >{`${item.name} - ${item.material}`}</option>
  );

  useEffect(() => {
    setCategories(categoryList);
    if (categoryList.length) {
      setCategory(categoryList[0].id);
    }
  }, []);



  const addStock = async () => {
    URL = '/api/V1/ornament'
    const ornament = {
      name: name,
      weight: weight,
      wastage: wastage,
      making_charge: makingCharge,
      category_id: category_id,
    }
    const setting = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ornament),
    };
    try {
      const response = await fetch(URL, setting)
      if (response.status === 200) {
        handleClose()
      }
    } catch { }
    console.log(name, weight, wastage, makingCharge, category_id)
    handleClose()
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Stock
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Stock</Modal.Title>
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
              <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
                {categoryItem}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addStock}>
            Update Stock
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




