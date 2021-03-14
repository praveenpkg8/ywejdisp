import React, { useState } from "react";
import { Button, Breadcrumb, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {
  updateGoldPrice, updateSilverPrice, updatePlatinumPrice,
  updateDaimondPrice, selectGoldPrice, selectSilverPrice, 
  selectPlatinumPrice, selectDaimondPrice
} from '../../features/materialPriceSlice';


const MaterialPrice = () => {
  const [show, setShow] = useState(false);
  const [material, setMaterial] = useState('');
  const [materialPrice, setMaterialPrice] = useState(0);
  const [goldPrice, setGoldPrice] = useState(useSelector(selectGoldPrice));
  const [silverPrice, setSilverPrice] = useState(useSelector(selectSilverPrice));
  const [platinumPrice, setPlatinumPrice] = useState(useSelector(selectPlatinumPrice));
  const [daimondPrice, setDaimondPrice] = useState(useSelector(selectDaimondPrice));

  const dispatch = useDispatch();

  const handleShow = (material, materialPrice) => {
    setShow(true);
    setMaterial(material);
    setMaterialPrice(materialPrice)
  }
  const handleClose = () => setShow(false);

  const saveChangeMaterialPricing = () => {
    if (material == "GOLD") {
      setGoldPrice(materialPrice);
      dispatch(
        updateGoldPrice(materialPrice)
      );
      updateGoldPrice(materialPrice);
    } else if (material == "SILVER") {
      setSilverPrice(materialPrice);
      dispatch(
        updateSilverPrice(materialPrice)
      );
    } else if (material == "PLATINUM") {
      setPlatinumPrice(materialPrice);
      dispatch(
        updatePlatinumPrice(materialPrice)
      );
    } else if (material == "DAIMOND") {
      setDaimondPrice(materialPrice);
      dispatch(
        updateDaimondPrice(materialPrice)
      );
    }
    handleClose();
  }

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item >
          <Button variant="warning" size="sm" onClick={() => handleShow("GOLD", goldPrice)}>
            {`Gold -> 1 gm: ${goldPrice} Rs.`}
          </Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
          <Button variant="secondary" size="sm" onClick={() => handleShow("SILVER", silverPrice)}>
            {`Silver -> 1 gm: ${silverPrice} Rs.`}
          </Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
          <Button variant="info" size="sm" onClick={() => handleShow("PLATINUM", platinumPrice)}>
            {`Platinum -> 1 gm: ${platinumPrice} Rs.`}
          </Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
          <Button variant="dark" size="sm" onClick={() => handleShow("DAIMOND", daimondPrice)}>
            {`Daimond -> 1 ct: ${daimondPrice} Rs.`}
          </Button>
        </Breadcrumb.Item>
      </Breadcrumb>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update {`${material}`} Pricing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>{`${material}`} 1 gm Price</Form.Label>
              <Form.Control
                type="text"
                value={materialPrice}
                onChange={(e) => { setMaterialPrice(e.target.value); }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
            </Button>
          <Button variant="primary" onClick={() => saveChangeMaterialPricing()}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}




export default MaterialPrice;