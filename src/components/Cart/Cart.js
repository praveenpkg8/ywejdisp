import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Table, ListGroup } from "react-bootstrap";
import { getStockById } from '../Stock/Stock';

import CartItem from './CartItem';

const Cart = () => {

    const [cartItemList, setCartItemList] = useState([]);
    const [itemDetail, setItemDetail] = useState({});
    const [itemId, setItemId] = useState('');




    const addItemToCart = async () => {

        const _itemDetail = await getStockById(itemId);
        setCartItemList(cartItemList => [...cartItemList, _itemDetail]);
        console.log(cartItemList);

        setItemId("");


    }

    console.log(cartItemList)

    const tableItem = cartItemList.map((object) => <CartItem key={object.id}
        object={{ object }} />)




    return (
        <>
            <InputGroup className="mb-3" size="sm" >
                <FormControl
                    placeholder="items"
                    aria-label="items"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setItemId(e.target.value)}
                    value={itemId}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => addItemToCart()}>Button</Button>
                </InputGroup.Append>
            </InputGroup>
            <Table responsive striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Wastage</th>
                        <th>Making Charge</th>
                        <th>Category</th>
                        <th>Material</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItem}
                </tbody>
            </Table>


        </>
    )
}

export default Cart;