import React, { useState } from "react";
import ListItems from "./ListItems";

const Content = ({ products, handleDelete, handleChange }) => {
    return (
        <main>
            {products.length ? (
                <ListItems
                    products={products}
                    handleDelete={handleDelete}
                    handleChange={handleChange}
                />
            ) : (
                <h4>No products</h4>
            )}
        </main>
    );
};

export default Content;
