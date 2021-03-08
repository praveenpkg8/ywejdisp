import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import UpdateStock from '../Stock/UpdateStock'

const TableItem = (props) => {
  const { object } = props.object;
  const [name, setName] = useState(object.name);
  const [weight, setWeight] = useState(object.weight);
  const [wastage, setWastage] = useState(object.wastage);
  const [makingCharge, setMakingCharge] = useState(object.making_charge);
  const { deleteItem } = props;
  const setting = {
    method: "DELETE",
  };
  const flag = true

  const _updateStock = (_object) => {
    setName(_object.name)
    setWeight(_object.weight)
    setWastage(_object.wastage)
    setMakingCharge(_object.making_charge)
  }
  const deleteOrnament = async () => {
    if (!flag) return

    try {
      const URL = "/api/V1/ornament/" + object.id;
      const response = await fetch(URL, setting);
      if (response.status === 200){
        deleteItem(object.id)
      }
    } catch {}

  };

  const trash = <FontAwesomeIcon 
  icon={faTrash} 
  onClick={deleteOrnament} />;


  
    

  return (
    <tr>
      <th scope="row">{object.id}</th>
      <td>{name}</td>
      <td>{weight}</td>
      <td>{wastage}</td>
      <td>{makingCharge}</td>
      <td><UpdateStock object={object} _updateStock={_updateStock} /></td>
      <td>{trash}</td>
    </tr>
  );
};

export default TableItem;
