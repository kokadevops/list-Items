import React from "react";

const Footer = ({ length }) => {
    return (
        <footer>
            {length ? (
                <p>
                    {" "}
                    list of {length}
                    {length === 1 ? " item" : " items"}
                </p>
            ) : (
                <p> copyright &copy;</p>
            )}
        </footer>
    );
};

export default Footer;
