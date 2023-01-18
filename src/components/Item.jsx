import React from "react";

const Item = ({ item, handleDelete, handleChange }) => {
    return (
        <li className="item">
            <input
                checked={item.checked}
                onChange={() => handleChange(item.id)}
                type="checkbox"
            ></input>
            <label
                style={item.checked ? { color: "red" } : null}
                onDoubleClick={() => handleChange(item.id)}
            >
                {item.title}
            </label>
            <button
                className="deleteButton"
                onClick={() => handleDelete(item.id)}
            >
                remove
            </button>
        </li>
    );
};

export default Item;
