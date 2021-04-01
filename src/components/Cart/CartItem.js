import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import {
    selectGoldPrice, selectSilverPrice,
    selectPlatinumPrice, selectDaimondPrice
} from '../../features/materialPriceSlice';

const CartItem = (props) => {
    const { object } = props.object;
    const { id, name, weight, wastage,
        making_charge: makingCharge, category_name: category,
        category_material: material } = object;
    const materialPriceDict = {
        GOLD: useSelector(selectGoldPrice),
        SILVER: useSelector(selectSilverPrice),
        PLATINUM: useSelector(selectPlatinumPrice),
        DAIMOND: useSelector(selectDaimondPrice),
    }
    const materialPrice = materialPriceDict[material] * weight;
    const makingPrice = materialPrice * (makingCharge / 100)
    const wastagePrice = materialPrice * (wastage / 100)
    const price = materialPrice + makingPrice + wastagePrice;
    const flag = true

    const deleteItem = async () => {
        if (!flag) return
    
        try {
          const URL = "/api/V1/ornament/" + object.id;
          const response = await fetch(URL, setting);
          flag = false;
          if (response.status === 200){
            deleteItem(object.id);
            flag = true;
          }
        } catch {}
    
      };
    const trash = <FontAwesomeIcon
        icon={faTrash}
        onClick={deleteItem} />;
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
            <td>{trash}</td>
        </tr>
    );
};

export default CartItem;
