import React, { useState } from "react";

const Content = () => {
    const [products, setProducts] = useState([
        {
            title: "product 1",
            id: 1,
            checked: true,
        },
        {
            title: "product 2",
            id: 2,
            checked: false,
        },
        {
            title: "product 3",
            id: 3,
            checked: false,
        },
    ]);

    return <main></main>;
};

export default Content;
