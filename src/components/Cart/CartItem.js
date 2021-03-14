import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
// import UpdateCategory from './UpdateCategory'
// import UpdateStock from './UpdateStock';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateGoldPrice, updateSilverPrice, updatePlatinumPrice,
  updateDaimondPrice, selectGoldPrice, selectSilverPrice, 
  selectPlatinumPrice, selectDaimondPrice
} from '../../features/materialPriceSlice';
import MaterialPrice from "../Category/MaterialPrice";

const CartItem = (props) => {
    const { object } = props.object;
    console.log(props);
    const [id, setId] = useState(object.id);
    const [name, setName] = useState(object.name);
    const [weight, setWeight] = useState(object.weight);
    const [wastage, setWastage] = useState(object.wastage);
    const [makingCharge, setMakingCharge] = useState(object.making_charge);
    const [category, setCategory] = useState(object.category_name);
    const [material, setMaterial] = useState(object.category_material);
    const materialPriceDict = {
        GOLD: useSelector(selectGoldPrice),
        SILVER: useSelector(selectSilverPrice),
        PLATINUM: useSelector(selectPlatinumPrice),
        DAIMOND: useSelector(selectDaimondPrice),
    }
    const materialPrice = materialPriceDict[material] * weight;
    const makingPrice = materialPrice * (makingCharge/100)
    const wastagePrice = materialPrice * (wastage/100)
    const price = materialPrice + makingPrice + wastagePrice;
    console.log(price);
    console.log("material price", materialPrice)
    console.log("making price", makingPrice);
    console.log("wastage price", wastagePrice);


    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{weight} gm</td>
            <td>{wastage} %</td>
            <td>{makingCharge} %</td>
            <td>{category}</td>
            <td>{material}</td>
            <td>{price} Rs.</td>
        </tr>
    );
};

export default CartItem;
