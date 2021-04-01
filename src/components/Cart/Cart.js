import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Table, ListGroup } from "react-bootstrap";
import { getStockById } from '../Stock/Stock';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemList, saveCartItem } from '../../features/cartSlice';

import CartItem from './CartItem';

const Cart = () => {

    const [cartItemList, setCartItemList] = useState(useSelector(selectCartItemList));
    const [itemDetail, setItemDetail] = useState({});
    const [itemId, setItemId] = useState('');
    const dispatch = useDispatch()




    const getCartStockById = async (id) => {
        try {
            const URL = "/api/V1/cart/ornament/" + id;
            const response = await fetch(URL);
            const data = await response.json();
            if (response.status === 200) {
                return data.ornament;
            } else {
                return false
            }
        } catch { }
    }


    const addItemToCart = async () => {

        const _itemDetail = await getCartStockById(itemId);
        if (_itemDetail) {
            setCartItemList(cartItemList => [...cartItemList, _itemDetail]);
            dispatch(
                saveCartItem([...cartItemList, _itemDetail])
            );
        }
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
                        <th>Delete</th>
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