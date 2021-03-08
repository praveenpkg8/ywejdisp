import React, { Component } from "react";
import CategoryItem from "./CategoryItem"

const URL = "/api/V1/category";

export const fetchAllCategories = async () => {
  try{
    const response = await fetch(URL);
    const data = await response.json();
    const categories = await data.categories;
    return categories
  }catch(e){
    log.info(e)
  }
  
  
};

class Category extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getAllCategories();
  }

  getAllCategories = async () => {
    try{
      const response = await fetch(URL);
      const data = await response.json();
      const categories = data.categories;
      this.setState({
        categories: categories,
      });
    }catch{}
    
    
  };


  deleteItem = (id) => {
    const { categories } = this.state;
    this.setState({
        categories: categories.filter( el => el.id != id)
    })
  }

  render() {
    const { categories } = this.state;
    const tableItem = categories.map((object) => (
      <CategoryItem 
      key={object.id} 
      object={{ object }} 
      deleteItem={this.deleteItem}
      />
    ));
    return (
      <>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{tableItem}</tbody>
        </table>
      </>
    );
  }
}

export default Category;

