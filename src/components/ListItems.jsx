import React from "react";
import Item from "./Item";

const ListItems = ({ products, handleDelete, handleChange }) => {
    return (
        <ul>
            {products.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                    />
                );
            })}
        </ul>
    );
};

export default ListItems;
