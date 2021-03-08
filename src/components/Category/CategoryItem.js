import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import UpdateCategory from './UpdateCategory'

const CategoryItem = (props) => {
  const { object } = props.object;
  const [name, setName] = useState(object.name);
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
      const URL = "/api/V1/category/" + object.id;
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
      <td><UpdateCategory object={object} _updateCategory={_updateCategory} /></td>
      <td>{trash}</td>
    </tr>
  );
};

export default CategoryItem;
