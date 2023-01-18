import React, { useRef } from "react";

const NewItem = ({ inputItem, handle, handleSubmit }) => {
  const inputRef=useRef()
    // const NewItem = ({ inputItem, setInputItem, handleSubmit }) => {
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <input
                value={inputItem}
                onChange={(e) => handle(e)}
                // onChange={(e) => setInputItem (e.target.value)}
                id="additem"
                type="text"
                placeholder="add item"
                required
                ref={inputRef}
            />
            {/* <label htmlFor="additem"></label> */}
            <button onClick={()=>inputRef.current.focus()} className="addButton" type="submit">
                add
            </button>
        </form>
    );
};

export default NewItem;
