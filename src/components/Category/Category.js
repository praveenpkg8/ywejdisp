import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem"
import AddCategory from "./AddCategory";

const URL = "/api/V1/category";

export const fetchAllCategories = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const categories = await data.categories;
    console.log(categories)
    return categories
  } catch (e) {
    log.info(e)
  }


};


const Category = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryPromise = fetchAllCategories();
    categoryPromise.then(categories => {
      setCategories(categories);
    });
  }, []);

  const deleteItem = (id) => {
    setCategories(categories.filter(el => el.id != id));
  }

  const tableItem = categories.map((object) => (
    <CategoryItem
      key={object.id}
      object={{ object }}
      deleteItem={deleteItem}
    />
  ));

  return (
    <>
      <AddCategory />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Material</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{tableItem}</tbody>
      </table>
    </>
  );
}

export default Category;

