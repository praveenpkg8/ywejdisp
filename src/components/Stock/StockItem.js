import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
// import UpdateCategory from './UpdateCategory'
import UpdateStock from './UpdateStock';

const StockItem = (props) => {
  const { object } = props.object;
  const [name, setName] = useState(object.name);
  const [weight, setWeight] = useState(object.weight);
  const [wastage, setWastage] = useState(object.wastage);
  const [makingCharge, setMakingCharge] = useState(object.making_charge);
  const [category, setCategory] = useState(object.category_name);
  const [material, setMaterial] = useState(object.category_material);
  



  const { deleteItem } = props;
  const setting = {
    method: "DELETE",
  };
  const flag = true

  const _updateCategory = (_object) => {
    setName(_object.name)
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
      <td>{category}</td>
      <td>{material}</td>
      <td><UpdateStock object={object} _updateCategory={_updateCategory} /></td>
      <td>{trash}</td>
    </tr>
  );
};

export default StockItem;
