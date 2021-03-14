import React, { Component, useState, useEffect } from "react";

import { useDispatch } from 'react-redux';
import { getAllCategory  } from '../../features/categorySlice';

import StockItem from '../Stock/StockItem';
import AddStock from '../Stock/AddStock';
import { fetchAllCategories } from '../Category/Category';


const getStockById = async (id) => {
    try {
        const URL = "/api/V1/ornament/" + id;
        const response = await fetch(URL);
        const data = await response.json();
        if (response.status === 200) {
            return data.ornament;
        }
        else { return {} }
    } catch { }
}

const getAllStocks = async () => {
    try {
        const URL = "/api/V1/ornaments";
        const response = await fetch(URL);
        const data = await response.json();
        if (response.status === 200) {
            return data.ornaments;
        }
        else { return [] }
    } catch { }

};

const Stock = () => {

    const [stocks, setStocks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const stocksPromise = getAllStocks();
        stocksPromise.then(stockList => {
            setStocks(stockList);
        })
        const categoriesPromise = fetchAllCategories();
        categoriesPromise.then(_categoryList => {
            dispatch(
                getAllCategory(_categoryList)
            );
        })

    }, []);

    const deleteStock = (id) => {
        setStocks(stocks.filter(el => el.id != id));

    }



    const tableItem = stocks.map((object) => (
        <StockItem
            key={object.id}
            object={{ object }}
            deleteItem={deleteStock}
        />
    ));
    return (
        <>
            <AddStock />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Wastage</th>
                        <th scope="col">Making Charge</th>
                        <th scope="col">Category</th>
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


export {getStockById, getAllStocks};
export default Stock;


