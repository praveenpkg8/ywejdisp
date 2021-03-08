import React, { Component } from "react";
import TableItem from "./TableItem";

const URL = "/api/V1/ornaments";
class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      ornaments: [],
    };
  }

  componentDidMount() {
    this.getAllOrnaments();
  }

  getAllOrnaments = async () => {
    try{
      const response = await fetch(URL);
      const data = await response.json();
      const ornaments = data.ornaments;
      this.setState({
        ornaments: ornaments,
      });
    }catch{}
    
    
  };


  deleteItem = (id) => {
    const { ornaments } = this.state;
    this.setState({
      ornaments: ornaments.filter( el => el.id != id)
    })
  }

  render() {
    const { ornaments } = this.state;
    const tableItem = ornaments.map((object) => (
      <TableItem 
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
              <th scope="col">Weight</th>
              <th scope="col">Wastage</th>
              <th scope="col">Making Charge</th>
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

export default Table;
