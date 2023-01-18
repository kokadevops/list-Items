import { useState } from "react";
import NewItem from "./components/NewItem";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";

const App = () => {
    const [inputItem, setInputItem] = useState("");
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem("itemslist")) || []
    );
    const setAndSave = (item) => {
        setProducts(item);
        localStorage.setItem("itemslist", JSON.stringify(item));
    };
    const addNewItem = (item) => {
        const id = Math.random();
        const myNewItem = { title: item, id, checked: false };
        const list = [...products, myNewItem];
        setAndSave(list);
    };

    const handleChange = (id) => {
        const listProducts = products.map((item) => {
            return item.id === id ? { ...item, checked: !item.checked } : item;
        });
        setAndSave(listProducts);
    };

    const handleDelete = (id) => {
        const del = products.filter((item) => item.id !== id);
        setAndSave(del);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewItem(inputItem);
        setInputItem("");
    };
    const handle = (e) => {
        setInputItem(e.target.value);
    };

    return (
        <div className="App">
            <Header />
            <NewItem
                inputItem={inputItem}
                // setInputItem={setInputItem}
                handle={handle}
                handleSubmit={handleSubmit}
            />
            <SearchItem search={search} setSearch={setSearch} />
            <Content
                // products={products}
                products={products.filter((item) =>
                    item.title.toLowerCase().includes(search.toLowerCase())
                )}
                handleChange={handleChange}
                handleDelete={handleDelete}
            />
            <Footer length={products.length} />
        </div>
    );
};

export default App;
